import { combineReducers } from "redux";
import usersReducer from "./usersReducer";
import authReducer from "./authReducer";
import adminsReducer from "./adminsReducer";

const reducers = combineReducers({
  auth: authReducer,
  users: usersReducer,
  admins: adminsReducer,
});

export default reducers;
