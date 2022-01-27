import React from "react";
import { renderRoutes } from "react-router-config";
import { fetchCurrentUser } from "./actions";
import Header from "./components/Layout/Header";

const App = ({ route: { routes } }) => {
  return (
    <div>
      <Header />
      {renderRoutes(routes)}
    </div>
  );
};

export default {
  component: App,
  loadData: ({ dispatch }) => dispatch(fetchCurrentUser()),
};
