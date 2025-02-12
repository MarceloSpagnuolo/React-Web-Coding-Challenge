import {
  ERROR_MESSAGE,
  GET_ALL_CASES,
  GET_FIND_DESC,
  GET_DATES,
} from "./constants";

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
    case GET_FIND_DESC:
      return {
        ...state,
        cases: action.payload.bikes,
      };
    case ERROR_MESSAGE: {
      alert(action.message);
      return state;
    }
    case GET_DATES:
      return {
        ...state,
        cases: action.payload,
      };
    default:
      return state;
  }
};
