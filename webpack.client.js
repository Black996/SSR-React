const path = require("path");
const merge = require("webpack-merge");
const baseConfig = require("./webpack.base");

const clientConfig = {
  // Inform webpack that we're builing a bundle for nodeJS
  // not for the browser

  entry: "./src/client",

  // name of the generated file and where to put it
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "public"),
  },
};

module.exports = merge(baseConfig, clientConfig);
