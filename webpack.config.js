var webpack           = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  entry: __dirname + '/app/main.js',
  output: {
    path:     __dirname + '/build',
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

  plugins: [
    new webpack.BannerPlugin('Tritown Industries'),
    new HtmlWebpackPlugin({
      template: __dirname + '/app/index.tmpl.html'
    })
  ],

  devtool: 'eval-source-map',

  devServer: {
    contentBase:        './public',
    colors:             true,
    historyApiFallback: true,
    inline:             true
  }
};
