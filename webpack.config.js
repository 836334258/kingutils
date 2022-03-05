import pkg from './package.json'
import path from 'path'

export default {
  mode: 'development',
  entry: path.resolve('src', 'index.ts'),
  output: {
    filename: `${pkg.name}.min.js`,
    path: path.resolve('dist'),
    library: {
      name: `${pkg.name}`,
      type: 'umd',
      export: 'default', // 不使用default会导致kingutils.hello()出错
    },
  },
  module: {
    rules: [
      {
        test: /\.m?js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
        },
      },
      {
        test: /\.tsx?$/,
        exclude: /node_modules/,
        use: {
          loader: 'ts-loader',
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
}
