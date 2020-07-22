import { combineReducers } from "redux";
import cardReducer from "./cardReducer";
import userReducer from "./userReducer";

const reducers = combineReducers({ cardReducer, userReducer });

export default reducers;
