import { createStore, combineReducers } from "redux";
import AppReducer, { ApiReducer } from "./reducers/appReducer";

const AllReducer = {
  AppReducer,
  ApiReducer,
};

const rootReducer = combineReducers(AllReducer);

const store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
);

export default store;
