import { actionTypes } from "./types";

export const fetchUsers = () => async (dispatch, getState, api) => {
  const res = await api.get("/users");

  dispatch({
    type: actionTypes.FETCH_USERS,
    payload: res,
  });
};

export const fetchCurrentUser = () => async (dispatch, getState, api) => {
  const res = await api.get("/current_user");

  dispatch({
    type: actionTypes.FETCH_CURRENT_USER,
    payload: res,
  });
};
