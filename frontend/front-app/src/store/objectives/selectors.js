import { createSelector } from "reselect";

// Global objectives selectors ========================================
export const data = state => state.objectives.data;
export const currentDate = state => state.objectives.currentDate;
export const currentOvertarget = createSelector(
  data,
  objectives => objectives.filter(el => el.current > el.target).length
);

export const nestedData = createSelector(
  data,
  objectives => {
    const getNestedChildren = (arr, parent) => {
      const nested = [];

      Object.values(arr).forEach(item => {
        if (item.parent_id === parent) {
          const children = getNestedChildren(arr, item.id);

          if (children.length) {
            item.children = children;
          }

          nested.push(item);
        }
      });

      return nested;
    };

    const nestedObjectives = (arr, parent) => {
      const mainParent = arr.find(el => !el.parent_id);

      const children = getNestedChildren(arr, parent);
      return [{ ...mainParent, children: [...children] }];
    };
    return nestedObjectives(objectives, 1);
  }
);
