const path = require("path");
// HTML模板
const HtmlWebpackPlugin = require("html-webpack-plugin");
// css 代码打包分离
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
// eslint插件
const ESLintPlugin = require("eslint-webpack-plugin");
// 根据相对路径获取绝对路径
const resolvePath = (relativePath) => path.resolve(__dirname, relativePath);
 
// 基础配置
const baseConfig = {
  // 入口文件
  entry: resolvePath("../src/index.tsx"),
  // 出口文件
  output: {
    path: resolvePath("../dist"),
    filename: "[name].bundle.js",
  },
  module: {
    rules: [
      // 对js|jsx文件的处理
      {
        test: /\.(js|jsx)$/,
        use: "babel-loader",
      },
      // 对ts|tsx文件的处理
      {
        test: /\.(ts|tsx)$/,
        use: [
          "babel-loader",
          "ts-loader",
        ]
      },
      // 对css文件的处理
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, "css-loader", "postcss-loader"],
      },
      // 对less文件的处理
      {
        test: /\.less$/,
        use: [
          MiniCssExtractPlugin.loader,
          "css-loader",
          "less-loader",
          "postcss-loader"
        ],
      },
    ],
  },
  resolve: {
    extensions: ['.ts','.tsx','.js', '.jsx', '.json']
  },
  plugins: [
    new HtmlWebpackPlugin({
      // 模板导入
      template: resolvePath("../public/index.html"),
      // 名称为
      filename: "index.html",
    }),
    new MiniCssExtractPlugin({
      filename: `[name].[hash:8].css`,
    }),
    new ESLintPlugin({
      fix: true,
      extensions: ["js", "ts", "tsx", "json"],
      exclude: "/node_modules/",
    })
  ],
};
module.exports = {
  baseConfig,
};