import "babel-polyfill";
import express from "express";
import renderer from "./helpers/renderer";
import createStore from "./helpers/reduxServerStore";

const app = express();

app.use(express.static("public"));

app.get("*", (req, res) => {
  const store = createStore();

  // We'll do some logic here

  res.send(renderer(req, store));
});

app.listen(3000, () => console.log("Listening on Port 3000"));
