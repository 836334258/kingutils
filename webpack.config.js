import pkg from './package.json' assert { type: 'json' }
import path from 'path'

export default {
  mode: 'production',
  entry: path.resolve('src', 'index.ts'),
  experiments: {
    outputModule: true,
  },
  output: {
    filename: `${pkg.name}.min.js`,
    path: path.resolve('dist'),
    library: {
      type: 'module',
    },
    module: true,
  },
  module: {
    rules: [
      {
        test: /\.m?js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'esbuild-loader',
          options: {
            target: 'esnext',
          },
        },
      },
      {
        test: /\.tsx?$/,
        exclude: /node_modules/,
        use: {
          loader: 'esbuild-loader',
          options: {
            loader: 'ts',
            target: 'esnext',
          },
        },
      },
    ],
  },
  resolve: {
    extensions: ['.ts', '.js', '.mjs'], // 引入文件可以不用加后缀名
    alias: {
      '@': path.resolve('src'),
    },
  },
  devtool: 'source-map',
}
