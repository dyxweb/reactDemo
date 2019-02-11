const webpack = require('webpack');
module.exports = {
  devtool: 'eval-source-map',
  mode: 'development',
  entry:  __dirname + "/src/main.js",//已多次提及的唯一入口文件
  output: {
    path: __dirname + "/public",//打包后的文件存放的地方
    filename: "bundle.js"//打包后输出文件的文件名
  },
  devServer: {
    contentBase: "./public",//本地服务器所加载的页面所在的目录
    historyApiFallback: true,//不跳转
    inline: true,//实时刷新
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
			      "plugins": [
							    ["import", { "libraryName": "antd", "libraryDirectory": "es", "style": "css" }] // `style: true` 会加载 less 文件
						]
		      }
	      },
     },
     {
	      test: /\.css$/,
	       //exclude:/node_modules/, // 这里千万要注意了，按需加载时，没有样式，这里弄的 
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
      {
		    test: /\.scss$/,
		    use: [
			    {
			        loader: "style-loader" 
			    },
			    {
			        loader: "css-loader" ,
			    },
			    {
			        loader: "sass-loader"
			    }
		    ]
      },
     ]
  },
  plugins: [
        new webpack.HotModuleReplacementPlugin()//热加载插件
    ]
}