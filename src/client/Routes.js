import React from "react";
import { Route } from "react-router-dom";

import HomePage from "./pages/HomePage";
import UsersListPage from "./pages/UsersListPage";
import App from "./App";

const routes = [
  {
    ...App,
    routes: [
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
    ],
  },
];

export default routes;
