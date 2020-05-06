const path = require("path");
const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: "./src/app/index.tsx",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "js/[name].bundle.js",
  },
  devtool: "source-map",
  resolve: {
    extensions: [".js", ".jsx", ".json", ".ts", ".tsx"],
  },
  module: {
    rules: [
      {
        test: /\.(ts|tsx)$/,
        loader: "ts-loader",
      },
      { enforce: "pre", test: /\.js$/, loader: "source-map-loader" },
    ],
  },
  devServer: {
    contentBase: path.resolve("./dist"),
    port: 3000,
    overlay: true,
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, "src", "templates", "index.html"),
      inject: "body",
    }),
    new webpack.HotModuleReplacementPlugin(),
  ],
};
