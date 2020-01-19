const webpack = require('webpack');
module.exports = {
  devtool: 'eval-source-map',
  mode: 'development',
  entry:  __dirname + "/src/index.js",
  output: {
    path: __dirname + "/public",
    filename: "bundle.js"
  },
  devServer: {
    contentBase: "./public",
    historyApiFallback: true,
    inline: true,
    hot:true,
    progress: true
  } ,
  module: {
    rules: [
     {
	      test: /(\.jsx|\.js)$/,
	      exclude:/node_modules/,
	      use: {
	        loader: "babel-loader",
	        options: {
		      }
	      },
     },
     {
	      test: /\.css$/,
	       //exclude:/node_modules/,
	      use: [
		      {
		        loader: "style-loader"
		      }, 
		      {
		        loader: "css-loader",
		      }, 
		    ]
	    },
	    {
		    test: /\.less$/,
		    use: [
			    {
			        loader: "style-loader" 
			    },
			    {
			        loader: "css-loader" ,
			        options: {
			          modules: true, 
			          localIdentName: '[name]__[local]--[hash:base64:5]' 
		          }
			    },
			    {
			        loader: "less-loader"
			    }
		    ]
      },
     ]
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ]
}