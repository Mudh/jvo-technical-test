import * as types from "./types";

const initialState = {
  data: [],
  currentDate: "2018-02-20"
};

const incrementData = (state, index) => {
  const target = state.data[index];

  const isCounter =
    target.counter === undefined
      ? { counter: 1 }
      : { counter: target.counter + 1 };

  return state.data.map((obj, i) =>
    i === index ? { ...obj, current: target.current + 1, ...isCounter } : obj
  );
};

// LOGIN REDUCER ////////////////////////////////////

export default (state = initialState, action = {}) => {
  switch (action.type) {
    case types.STORE_OBJECTIVES:
      return {
        ...state,
        data: [...action.data]
      };

    case types.INCREMENT_CURRENT: {
      const newData = incrementData(state, action.index);

      return {
        ...state,
        data: [...newData]
      };
    }

    case types.RANDOM_INCREMENT: {
      const getRandomInt = max => {
        return Math.floor(Math.random() * Math.floor(max));
      };
      const index = getRandomInt(state.data.length);
      const newData = incrementData(state, index);

      return {
        ...state,
        data: [...newData]
      };
    }

    default:
      return state;
  }
};
