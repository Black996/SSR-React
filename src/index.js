import "babel-polyfill";
import express from "express";
import { matchRoutes } from "react-router-config";
import renderer from "./helpers/renderer";
import createStore from "./helpers/reduxServerStore";
import routes from "./client/Routes";

const app = express();

app.use(express.static("public"));

app.get("*", (req, res) => {
  const store = createStore();

  const promises = matchRoutes(routes, req.url).map(({ route }) => {
    return route.loadData ? route.loadData(store) : null;
  });

  Promise.all(promises).then(() => res.send(renderer(req, store)));
});

app.listen(3000, () => console.log("Listening on Port 3000"));
