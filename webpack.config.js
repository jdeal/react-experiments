var path = require('path');

var buildPath = path.join(__dirname, 'build');

module.exports = {
  entry: {
    app: './index.js'
  },
  output: {
    path: buildPath,
    filename: '[name].js',
    sourceMapFilename: '[file].map'
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      }
    ]
  },
  devtool: 'eval-source-map',
  plugins: []
};
