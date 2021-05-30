const path=require("path");
const {VueLoaderPlugin} = require('vue-loader')
module.exports = {
  entry:{
    "userScript":"./js/userApp.js",
    "userPanelApp":"./js/userPanelApp.js",
    "signupApp":"./js/signup.js",
    "landingPage":"./js/landingPageApp.js",
    "landingRegisterSupplier":"./js/landingRegisterSupplierPage.js",
    'factoreApp':"./js/components/factores/factoreApp.js",
    "testMy":"./js/test.js",
    "app":"./js/app.js"
  },
  output:{
      path:path.resolve(__dirname,"public"),
      filename:"[name].js",
      // publicPath:"/"
    publicPath:"/static/public/"
  },
  mode: 'development',
    // mode: 'production',
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader'
      },
      {
        test: /\.svg$/,
        loader: 'svg-inline-loader'
      },
      {
        test: /\.js$/,
        loader: 'babel-loader'
      },
      {
        // test: /\.css$/,
        // use: [
        //   'vue-style-loader',
        //   {
        //     loader: 'css-loader'
        //   }
        // ]
        // test: /\.css$/i,
        // loader: "css-loader",
        // options: {
        //   import: true,
        // },
        test: /.css$/,
        use: [
          'vue-style-loader',
          'css-loader',
        ]
      },
      {
        test: /\.(woff(2)?|ttf|eot|svg)(\?v=\d+\.\d+\.\d+)?$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name].[ext]',
              publicPath: './',
            }
          }
        ]
      },
      {
        test: /\.(png|svg|jpe?g|gif)$/,
        include: /images/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name].[ext]',
              outputPath: 'images/',
              publicPath: 'images/'
            }
          }
        ]
      },

    ]
  },
  resolve: { alias: { vue: 'vue/dist/vue.esm.js' } },
  plugins: [
    new VueLoaderPlugin()
  ]
}
