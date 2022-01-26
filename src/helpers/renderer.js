import React from "react";
import { renderToString } from "react-dom/server";
import { StaticRouter } from "react-router-dom";
import { Provider } from "react-redux";
import serialize from "serialize-javascript";
import routes from "../client/Routes";
import { renderRoutes } from "react-router-config";

export default (req, store) => {
  const content = renderToString(
    <Provider store={store}>
      <StaticRouter location={req.path} context={{}}>
        {renderRoutes(routes)}
      </StaticRouter>
    </Provider>
  );
  return `
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta http-equiv="X-UA-Compatible" content="IE=edge">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Document</title>
        </head>
        <body>
           <div id="root">${content}</div>
           <script>window.INITIAL_STATE=${serialize(store.getState())}</script>
           <script src="bundle.js"></script>
        </body>
        </html>
  `;
};
