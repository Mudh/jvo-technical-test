import * as types from "./types";

// LOGIN ACTIONS ///////////////////////////////////

export const storeObjectives = data => ({
  type: types.STORE_OBJECTIVES,
  data
});

export const incrementCurrent = index => ({
  type: types.INCREMENT_CURRENT,
  index
});

export const randomIncrement = () => ({
  type: types.RANDOM_INCREMENT
});
