const path = require("path");

module.exports = {
  devServer: {
    contentBase: path.resolve(__dirname, "public"),
    historyApiFallback: true,
  },
  entry: "./src/index.js",
  module: {
    rules: [
      {
        test: /\.js$/,
        use: "babel-loader",
        exclude: /node_modules/,
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
    ],
  },
  output: {
    path: path.join(__dirname, "public"),
    filename: "bundle.js",
  },
};
