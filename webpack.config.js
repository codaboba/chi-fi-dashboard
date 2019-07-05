const path = require('path');
const webpack = require('webpack');
const port = process.env.PORT || 8080;

module.exports = {
  entry: ['@babel/polyfill', './app/main.js'],
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
        loader: 'style-loader',
      },
      {
        test: /\.css$/,
        loader: 'css-loader',
        query: {
          modules: true,
          localIdentName: '[name]__[local]___[hash:base64:5]',
        },
      },
    ],
  },
  plugins: [new webpack.HotModuleReplacementPlugin()],
};
