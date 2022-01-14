const path = require("path");

module.exports = {
  // Inform webpack that we're builing a bundle for nodeJS
  // not for the browser

  entry: "./src/client",

  // name of the generated file and where to put it
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "public"),
  },

  // tell webpack to run every file it runs through
  module: {
    rules: [
      {
        test: /\.js?$/,
        loader: "babel-loader",
        exclude: /node_modules/,
        options: {
          presets: [
            "react",
            "stage-0",
            [
              "env",
              {
                targets: {
                  browsers: ["last 2 versions"],
                },
              },
            ],
          ],
        },
      },
    ],
  },
};
