const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: "./src/index.tsx",
  devtool: "inline-source-map",
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: "ts-loader",
        exclude: /node_modules/
      },
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: "babel-loader",
        options: {
          presets: ["@babel/preset-env"]
        }
      }
    ]
  },
  resolve: {
    extensions: [".tsx", ".ts", ".js", ".ejs"]
  },
  devServer: {
    port: 3000,
    contentBase: "./dist"
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "src/index.ejs"
    })
  ],
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js"
  }
};
