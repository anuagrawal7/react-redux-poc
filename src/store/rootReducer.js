import { combineReducers } from "redux";
import * as all from './../reducers'

const allReducers = combineReducers({
  ...all
});

export default allReducers;