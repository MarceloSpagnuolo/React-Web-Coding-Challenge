import { ERROR_MESSAGE, GET_ALL_CASES } from "./constants";

const inicialState = {
  cases: [],
};

export const ReducerStolen = (state = inicialState, action) => {
  switch (action.type) {
    case GET_ALL_CASES:
      return {
        ...state,
        cases: action.payload.bikes,
      };
    case ERROR_MESSAGE: {
      alert(action.message);
      return state;
    }
    default:
      return state;
  }
};
