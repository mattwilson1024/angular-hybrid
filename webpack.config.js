var path = require('path');
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: {
    main: './app/main.js'
  },
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, "dist")
  },
  devtool: 'inline-source-map',
  devServer: {
    contentBase: path.resolve(__dirname, "app"),
    inline: true,
    port: 8000,
    open: true
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.jsx']
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        loader: 'ng-annotate-loader!awesome-typescript-loader!angular2-template-loader'
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'ng-annotate-loader'
      },
      {
        test: /\.css$/,
        use: [ 'style-loader', 'css-loader', 'postcss-loader' ]
      },
      {
        test: /\.(woff|woff2|ttf|eot|gif|png|jpg|svg)$/,
        loader: 'url-loader?limit=10000&publicPath=webpackAssets/&outputPath=webpackAssets/'
      },
      {
        test: /\.html$/,
        use: 'raw-loader'
      },
      {
        test: /\.modernizrrc.js$/,
        loader: "modernizr-loader"
      },
      {
        test: /\.modernizrrc(\.json)?$/,
        loader: "modernizr-loader!json-loader"
      }
    ]
  },
  plugins: [
    // Extract third party libraries into a separate vendor bundle.
    // Also extract webpack manifest into its own bundle (to prevent vendor hash changing when app source changes)
    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendor',
      minChunks: function (module) {
        return module.context && module.context.indexOf('node_modules') !== -1;
      }
    }),
    new webpack.optimize.CommonsChunkPlugin({
      name: 'manifest'
    }),

    // Generate index.html file.
    // Include script bundles in the right order based on chunk name prefixes.
    new HtmlWebpackPlugin({
      title: 'Example',
      template: 'app/index.ejs',
      chunksSortMode: function (a, b) {
        const chunkOrder = ['manifest', 'vendor', 'main'];
        const aChunk = chunkOrder.findIndex(chunk => a.names[0].startsWith(chunk));
        const bChunk = chunkOrder.findIndex(chunk => b.names[0].startsWith(chunk));
        const aValue = (aChunk > -1) ? aChunk : chunkOrder.length;
        const bValue = (bChunk > -1) ? bChunk : chunkOrder.length;
        return aValue - bValue;
      }
    }),

    //https://github.com/angular/angular/issues/11580
    //Fixes "WARNING in ./~/@angular/core/@angular/core.es5.js 3705:332-415 Critical dependency: the request of a dependency is an expression"
    new webpack.ContextReplacementPlugin(/angular(\\|\/)core(\\|\/)@angular/,
      path.resolve(__dirname, './app')
    )

  ]
};
