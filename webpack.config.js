const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = ({env=[], mode='development'}={env:[], mode:'development'}) => {
  const config = {
    mode,
    entry: "./src/index.js",
    devServer: {
      open: false,
      port: 9090
    },
    devtool: 'source-map',
    resolve: {
      extensions: ['.ts', '.js'],
    },
    module: {
      rules: [
        {
          test: /\.ts$/,
          exclude: /node_modules/,
          loaders: ['babel-loader', 'awesome-typescript-loader']
        },
        {
          test: /\.js$/,
          loaders: 'source-map-loader',
          enforce: "pre"
        }
      ]
    },
    plugins: [
      new HtmlWebpackPlugin()
    ]
  }
  return config;
}
