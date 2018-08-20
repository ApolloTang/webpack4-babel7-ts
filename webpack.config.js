const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = ({env=[], mode='development'}={env:[], mode:'development'}) => {
  const config = {
    mode,
    devServer: {
      open: true,
      port: 9090
    },
    devtool: 'inline-source-map',
    module: {
      rules: [
        {
          test: /\.js|.ts/,
          exclude: /node_modules/,
          use: [ 'babel-loader', 'awesome-typescript-loader' ]
        }
      ]
    },
    plugins: [
      new HtmlWebpackPlugin()
    ]
  }
  return config;
}
