import { actionTypes } from "../actions";

const adminsReducer = (state = [], action) => {
  switch (action.type) {
    case actionTypes.FETCH_CURRENT_USER:
      return action.payload.data;
    default:
      return state;
  }
};

export default adminsReducer;
