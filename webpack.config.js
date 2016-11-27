var webpack = require('webpack');
var extractTextPlugin = require('extract-text-webpack-plugin');
module.exports = {
  entry: {
    bundle: "./public/app.js",
    vendor: ['react']
  },
  output: {
    path: __dirname + '/build',
    filename: '[name].bundle.js'
  },
  module: {
    loaders: [{
        exclude: /(node_module)/,
        loader: 'babel-loader',
        query: {
          presets: ['es2015', 'react'] //历经各种问题，总之babel版本变化特别快，要根据babel官网的来
        }
      },
      {
        test: /\.css$/,
        // loader: 'style!css'
        // loader:extractTextPlugin.extract("css"),
        // loader:extractTextPlugin.extract("css"),
        loader:extractTextPlugin.extract("css?modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]"),
        
      }
    ],

  },
  plugins: [
    new extractTextPlugin("styles.css"),//将css独立打包出来，就不用style-loader了
    // new webpack.optimize.CommonsChunkPlugin({}),
    // new webpack.optimize.UglifyJsPlugin({minimize:true}),
    new webpack.optimize.CommonsChunkPlugin({
      name: "vendor",

      // filename: "vendor.js"
      // (Give the chunk a different name)

      minChunks: Infinity,
      // (with more entries, this ensures that no other module
      //  goes into the vendor chunk)
    })
  ],

  watch: true, //保证每次保存时会自动打包

}