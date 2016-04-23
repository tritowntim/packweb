module.exports = {
  entry: __dirname + '/app/main.js',
  output: {
    path:     __dirname + '/public',
    filename: 'bundle.js'
  },

  module: {
    loaders: [
      {
        test:   /\.json$/,
        loader: 'json'
      }
    ]
  },

  devtool: 'source-map',

  devServer: {
    contentBase:        './public',
    colors:             true,
    historyApiFallback: true,
    inline:             true
  }
};
