import { actionTypes } from "../actions";

const usersReducer = (state = [], action) => {
  switch (action.type) {
    case actionTypes.FETCH_USERS:
      return action.payload.data;
    default:
      return state;
  }
};

export default usersReducer;
