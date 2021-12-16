import axios from "axios";
import { GET_ALL_CASES, ERROR_MESSAGE } from "./constants";

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
