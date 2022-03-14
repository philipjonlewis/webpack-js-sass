const path = require("path");

module.exports = {
  entry: {
    main: "./src/index.js",
    about: "./src/js/about.js",
    contact: "./src/js/contact.js",
    vendor: "./src/vendors/vendor.js",
  },
  module: {
    rules: [
      // {
      //   test: /\.html$/,
      //   use: ["html-loader"],
      // },
      {
        test: /\.(svg|png|jpg|gif)$/,
        type: "asset/resource",
      },
    ],
  },
  resolve: {
    extensions: [".tsx", ".ts", ".js"],
  },
  output: {
    filename: "[name].[hash].bundle.js",
    path: path.resolve(__dirname, "dist"),
    assetModuleFilename: "images/[name].[hash][ext][query]",
  },
};
