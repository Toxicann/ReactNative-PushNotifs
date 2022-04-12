import { combineReducers } from "redux";
import notificationReducer from "./notificationReducer";

const reducers = combineReducers({
  notification: notificationReducer,
});

export default reducers;
