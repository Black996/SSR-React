import { combineReducers } from "redux";
import usersReducer from "./usersReducer";
import authReducer from "./authReducer";

const reducers = combineReducers({
  auth: authReducer,
  users: usersReducer,
});

export default reducers;
