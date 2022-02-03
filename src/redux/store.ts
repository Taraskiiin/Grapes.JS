import { createStore, applyMiddleware } from "redux";
import rootReducer from "./redusers";

const store = () => {
  const store = createStore(rootReducer, applyMiddleware());
  return store;
};

export default store;