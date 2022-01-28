import React from "react";

const NotFoundPage = ({ staticContext = {} }) => {
  staticContext.notFound = true;
  return <h1>Nothing Found Here!</h1>;
};

export default {
  component: NotFoundPage,
};
