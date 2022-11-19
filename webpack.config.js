const {
  VueLoaderPlugin
} = require('vue-loader')
const HtmlWebpackPlugin = require('html-webpack-plugin');
const HtmlWebpackPlugi = require('html-webpack-plugin')

module.exports = {
  entry: ['./public/js/main.js', './public/js/CartComponent.js', './public/js/FilterComp.js', './public/js/ProductsComponent.js'],
  output: {
    filename: "./build.js"
  },
  module: {
    rules: [{
        test: /\.vue$/,
        loader: 'vue-loader'
      },
      // this will apply to both plain `.js` files
      // AND `<script>` blocks in `.vue` files
      {
        test: /\.css$/,
        use: [
          'vue-style-loader',
          'css-loader'
        ]
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./public/index.html",
    }),
    new VueLoaderPlugin(),
  ]
}