const webpack = require('webpack');
module.exports = {
  devtool: 'eval-source-map',
  mode: 'development',
  entry:  __dirname + "/src/index.js",
  output: {
    path: __dirname + "/public",
    filename: "bundle.js"
  },
  module: {
    rules: [
      {
	      test: /(\.jsx|\.js)$/,
	      exclude:/node_modules/,
	      use: {
	        loader: "babel-loader",
	      },
      },
    ]
  },
}