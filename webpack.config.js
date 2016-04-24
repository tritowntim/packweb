module.exports = {
  entry: __dirname + '/app/main.js',
  output: {
    path:     __dirname + '/public',
    filename: 'bundle.js'
  },

  module: {
    loaders: [
      {
        test:     /\.json$/,
        loader:   'json'
      },
      {
        test:     /\.js$/,
        exclude:  '/node_modules/',
        loader:   'babel'
      },
      {
        test:     /\.css$/,
        loader:   'style!css?modules!postcss'
      }
    ]
  },

  postcss: [
    require('autoprefixer')
  ],

  devtool: 'eval-source-map',

  devServer: {
    contentBase:        './public',
    colors:             true,
    historyApiFallback: true,
    inline:             true
  }
};
