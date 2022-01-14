const path = require("path");
const merge = require("webpack-merge");
const webpackNodeExternals = require("webpack-node-externals");
const baseConfig = require("./webpack.base");

const serverConfig = {
  // Inform webpack that we're builing a bundle for nodeJS
  // not for the browser

  target: "node",

  entry: "./src/index.js",

  // name of the generated file and where to put it
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "build"),
  },

  externals: [webpackNodeExternals()],
};

module.exports = merge(baseConfig, serverConfig);
