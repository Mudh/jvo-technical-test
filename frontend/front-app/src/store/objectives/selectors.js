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
      let out = [];
      for (let i in arr) {
        if (arr[i].parent_id === parent) {
          const children = getNestedChildren(arr, arr[i].id);

          if (children.length) {
            arr[i].children = children;
          }
          out.push(arr[i]);
        }
      }
      return out;
    };

    const nestedObjectives = (arr, parent) => {
      const mainParent = arr.filter(el => !el.parent_id);
      const children = getNestedChildren(arr, parent);
      return [{ ...mainParent, children: [{ ...children }] }];
    };
    return nestedObjectives(objectives, 1);
  }
);
