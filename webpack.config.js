const path = require("path");
const HTMLWebpackPlugin = require("html-webpack-plugin");
const ForkTSCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');

const htmlPlugin = new HTMLWebpackPlugin({
  template: "public/index.html",
});
const tsPlugin = new ForkTSCheckerWebpackPlugin();

module.exports = {
  mode: "development",
  entry: "./src/index.tsx",
  output: {
    filename: "[name].[fullhash].js",
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx|ts|tsx)$/,
        include: path.resolve(__dirname, "src"),
        exclude: /node_modules/,
        use: [
          {
            loader: "babel-loader",
          },
        ],
      },
      {
        test: /\.html$/,
        use: [
          {
            loader: "html-loader",
            options: {
              minimize: true,
            },
          },
        ],
      },
    ],
  },
  plugins: [
    htmlPlugin,
    tsPlugin,
  ],
  devServer: {
    host: "localhost",
    port: 3000,
    open: true,
  }
};
