const path = require("path");
const UglifyJsPlugin = require("uglifyjs-webpack-plugin");
const webpack = require("webpack");
const CompressionPlugin = require("compression-webpack-plugin");

module.exports = {
  entry: "./app/main.js",
  output: {
    path: __dirname + "/dist/",
    filename: "bundle.js"
  },
  mode: "production",
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        loader: "babel-loader",
        query: {
          compact: true
        }
      }
    ]
  },
  devServer: {
    compress: true
  },
  optimization: {
    // splitChunks: {
    //     cacheGroups: {
    //         commons: {
    //             test: /[\\/]node_modules[\\/]/,
    //             name: 'vendors',
    //             chunks: 'all'
    //         }
    //     }
    // },
    minimizer: [
      new UglifyJsPlugin(),
      new CompressionPlugin({
        filename: "[path].gz[query]"
      })
    ]
  }
};
