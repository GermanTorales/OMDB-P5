module.exports = {
  mode: "development",
  entry: "./src/index.js",
  output: {
    publicPath: "../back/public",
    filename: "bundle.js",
    path: __dirname + "/../back/public",
  },
  resolve: {
    extensions: [".js", ".jsx"],
  },
  context: __dirname,
  module: {
    rules: [
      {
        test: /jsx?$/,
        exclude: /(node_modules|bower_components)/,
        loader: "babel-loader",
        query: {
          presets: ["@babel/preset-react", "@babel/env"],
        },
      },
    ],
  },
  devtool: "source-map",
};
