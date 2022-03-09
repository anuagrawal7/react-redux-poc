import { createStore, applyMiddleware } from "redux";
import { createLogger } from "redux-logger";
import thunkMiddleware from "redux-thunk";
import allReducers from "./rootReducer";

const logger = createLogger({});
const configureStore = () => {
  const store = createStore(allReducers, applyMiddleware(thunkMiddleware, logger));
  return store;
}

export default configureStore;