import { combineReducers } from "redux";
import commonReducer from "./reducer_common";
import authReducer from "./reducer_auth";
import feedReducer from './reducer_feed'
import notificationReducer from './notification'



const rootReducer = combineReducers({
  login : authReducer,
  posts : feedReducer,
  notification: notificationReducer,
  common : commonReducer
});

export default rootReducer;
