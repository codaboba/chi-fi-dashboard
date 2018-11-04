const path = require('path');
const webpack = require('webpack');
const port = process.env.PORT || 3000;

module.exports = {
  entry: './app/main.js',
  mode: 'development',
  output: {
    path: path.resolve(__dirname, 'public'),
    filename: 'bundle.js',
  },
  devServer: {
    contentBase: path.resolve(__dirname, 'public'),
    proxy: {
      '^/api/*': {
        target: `http://localhost:${port}/api/`,
        secure: false,
      },
    },
    hot: true,
  },
  devtool: 'source-maps',
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
  plugins: [new webpack.HotModuleReplacementPlugin()],
};
