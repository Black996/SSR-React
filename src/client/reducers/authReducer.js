import { actionTypes } from "../actions";

const authReducer = (state = [], action) => {
  switch (action.type) {
    case actionTypes.FETCH_CURRENT_USER:
      return action.payload.data || false;
    default:
      return state;
  }
};

export default authReducer;
