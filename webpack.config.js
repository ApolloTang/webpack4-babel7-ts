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
          test: /\.js/,
          exclude: /node_modules/,
          use: [ { loader: 'babel-loader' } ]
        }
      ]
    },
    plugins: [
      new HtmlWebpackPlugin()
    ]
  }
  return config;
}
