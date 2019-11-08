import { createSelector } from "reselect";

// Global objectives selectors ========================================
export const data = state => state.objectives.data;
export const currentDate = state => state.objectives.currentDate;
export const currentOvertarget = createSelector(
  data,
  objectives => objectives.filter(el => el.current > el.target).length
);
