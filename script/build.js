import ora from "ora";
import rm from "rimraf";
import pkg from "../package.json";
import path from "path";
import webpack from "webpack";
import config from "../webpack.config.js";
import process from "process";
import chalk from "chalk";

const building = ora({
  text: "building",
  color: "green",
});

building.start();
console.log(path.resolve("dist", `${pkg.name}.min.js`));
rm(path.resolve("dist", `${pkg.name}.min.js`), (err) => {
  if (err) {
    throw err;
  }

  webpack(config, (err, stats) => {
    if (err) {
      throw err.message;
    }
    building.stop();
    process.stdout.write(
      stats.toString({
        colors: true,
        modules: false,
        children: false,
        chunks: false,
        chunkModules: false,
      }) + "\n\n"
    );

    chalk.blueBright("  Build complete.\n");
  });
});
