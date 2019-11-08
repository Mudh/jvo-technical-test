import { storeObjectives } from "./actions";
import OBJECTIVES from "../../data.json";

// FETCH OBJECTIVES DATA ////////////////////////////////////////////

// Emulate async API request with setTimeout
export const fetchObjectives = () => {
  return dispatch => {
    setTimeout(() => {
      dispatch(storeObjectives(OBJECTIVES));
    }, 300);
  };
};
