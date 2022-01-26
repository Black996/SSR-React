import React from "react";
import { Route } from "react-router-dom";

import HomePage from "./pages/HomePage";
import UsersListPage from "./pages/UsersListPage";

const routes = [
  {
    ...HomePage,
    path: "/",
    exact: true,
  },
  {
    ...UsersListPage,
    path: "/users",
    exact: true,
  },
];

export default routes;
