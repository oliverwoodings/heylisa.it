var path = require("path");
var webpack = require("webpack");

var ENV = process.env.NODE_ENV || "development";

module.exports = {
  context: __dirname,
  entry: "./app/main.js",
  cache: true,
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "main.js"
  },
  devtool: "cheap-module-source-map",
  plugins: [
    new webpack.DefinePlugin({
      "process.env.NODE_ENV": "'" + ENV + "'"
    }),
    new webpack.NoErrorsPlugin(),
  ],
  module: {
    loaders: [{
      test: /(\.js|\.jsx)$/, exclude: /node_modules/,
      loader: "babel"
    }, {
      test: /\.json$/,
      loader: "json"
    }, {
      test: /\.css$/,
      loader: "style!css!cssnext"
    }, {
      test: /\.woff(\?v=\d+\.\d+\.\d+)?$/,
      loader: "url?limit=10000&mimetype=application/font-woff"
    }, {
      test: /\.woff2(\?v=\d+\.\d+\.\d+)?$/,
      loader: "url?limit=10000&mimetype=application/font-woff"
    }, {
      test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/,
      loader: "url?limit=10000&mimetype=application/octet-stream"
    }, {
      test: /\.eot(\?v=\d+\.\d+\.\d+)?$/,
      loader: "file"
    }, {
      test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
      loader: "url?limit=10000&mimetype=image/svg+xml"
    }]
  },
  resolve: {
    root: [path.resolve(__dirname + "/app")],
    alias: {
      react: path.resolve(__dirname, "node_modules/react")
    },
    extensions: ["", ".js", ".jsx"]
  },
  cssnext: {
    import: {
      path: ["app/styles"]
    }
  }
};