import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import { ReducerStolen } from "./reducer";
import thunk from "redux-thunk";

export default createStore(
  ReducerStolen,
  composeWithDevTools(applyMiddleware(thunk))
);
