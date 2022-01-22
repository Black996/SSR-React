import React from "react";
import { Route } from "react-router-dom";

import Home from "./components/Home";
import UsersList from "./components/UsersList";

const routes = [
  {
    path: "/",
    component: Home,
    exact: true,
  },
  {
    path: "/users",
    component: UsersList,
    exact: true,
  },
];

export default routes;
