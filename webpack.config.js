import pkg from "./package.json";
import path from "path";

export default {
  mode: "production",
  entry: path.resolve("src", "index.js"),
  output: {
    filename: `${pkg.name}.min.js`,
    path: path.resolve("dist"),
    library: {
      name: `${pkg.name}`,
      type: "umd",
    },
  },
  module: {
    rules: [
      {
        test: /\.m?js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env"],
          },
        },
      },
    ],
  },
};
