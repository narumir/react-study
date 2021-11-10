const path = require("path");
const HTMLWebpackPlugin = require("html-webpack-plugin");
const ForkTSCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');
const {
  ProvidePlugin,
} = require("webpack");

const htmlPlugin = new HTMLWebpackPlugin({
  template: "public/index.html",
  inject: true,
  minify: {
    removeComments: true,
    collapseWhitespace: true,
    removeRedundantAttributes: true,
    useShortDoctype: true,
    removeEmptyAttributes: true,
    removeStyleLinkTypeAttributes: true,
    keepClosingSlash: true,
    minifyJS: true,
    minifyCSS: true,
    minifyURLs: true,
  },
});
const typeCheckerPlugin = new ForkTSCheckerWebpackPlugin({});
const providerPlugin = new ProvidePlugin({
  React: 'react',
});

module.exports = {
  mode: "development",
  entry: "./src/index.tsx",
  output: {
    filename: "[name].[fullhash].js",
  },
  resolve: {
    extensions: ['.js', '.jsx', '.ts', '.tsx', ".json"],
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
    typeCheckerPlugin,
    providerPlugin,
  ],
  devServer: {
    host: "localhost",
    port: 3000,
    open: true,
  }
};
