import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import reducers from "../../client/reducers";
import { axiosServerInstance } from "../axiosInstances";

export default (req) => {
  return createStore(
    reducers,
    {},
    applyMiddleware(thunk.withExtraArgument(axiosServerInstance(req)))
  );
};
