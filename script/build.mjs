import ora from 'ora'
import rm from 'rimraf'
import webpack from 'webpack'
import config from '../webpack.config.js'
import process from 'process'
import chalk from 'chalk'
import pkg from '../package.json' assert { type: 'json' }
import path from 'path'

const building = ora({
  text: 'building',
  color: 'green',
})

building.start()
rm(path.resolve('dist', `${pkg.name}.min.js`), (err) => {
  if (err) {
    throw err
  }

  webpack(config, (err, stats) => {
    if (err) {
      throw err.message
    }
    building.stop()
    process.stdout.write(
      stats.toString({
        colors: true,
        modules: false,
        children: false,
        chunks: false,
        chunkModules: false,
      }) + '\n\n'
    )

    chalk.blueBright('  Build complete.\n')
  })
})
