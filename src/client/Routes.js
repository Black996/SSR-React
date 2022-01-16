import React from "react";
import Home from "./components/Home";
import { Route } from "react-router-dom";

const Routes = () => {
  return (
    <div>
      <Route exact path="/" component={Home} />
    </div>
  );
};

export default Routes;
