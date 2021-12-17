import axios from "axios";
import {
  GET_ALL_CASES,
  ERROR_MESSAGE,
  GET_FIND_DESC,
  GET_DATES,
} from "./constants";

export const GetAllCases = () => async (dispatch) => {
  try {
    const res = await axios.get(
      "https://bikeindex.org:443/api/v3/search?page=1&per_page=100&location=Berlin%2C%20DE&stolenness=proximity"
    );
    dispatch({
      type: GET_ALL_CASES,
      payload: res.data,
    });
  } catch (e) {
    dispatch({
      type: ERROR_MESSAGE,
      message: e,
    });
  }
};

export const GetFindDesc = (payload) => async (dispatch) => {
  try {
    const res = await axios.get(
      `https://bikeindex.org:443/api/v3/search?page=1&per_page=100&query=${payload.replace(
        /\s/g,
        "%20"
      )}&location=Berlin%2C%20DE&stolenness=proximity`
    );
    dispatch({
      type: GET_FIND_DESC,
      payload: res.data,
    });
  } catch (e) {
    dispatch({
      type: ERROR_MESSAGE,
      message: e,
    });
  }
};

export const GetDates = (cases, from, to) => async (dispatch) => {
  const res = cases.filter(
    (caso) =>
      caso.date_stolen >= new Date(from).getTime() / 1000 &&
      caso.date_stolen <= new Date(to).getTime() / 1000
  );
  console.log(res);
  dispatch({
    type: GET_DATES,
    payload: res,
  });
};
