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
        test: /.css$/,
        use: [
          'vue-style-loader',
          'css-loader',
        ]
      },
      // {
      //   test:/\.scss$/,
      //   use:[
      //     'vue-style-loader',
      //     'css-loader',
      //     'sass-loader'
      //   ]
      // }
      // {
      //   test: /\.sass$/,
      //   use: [
      //     'vue-style-loader',
      //     'css-loader',
      //     {
      //       loader: 'sass-loader',
      //       options: {
      //         indentedSyntax: true,
      //         // sass-loader version >= 8
      //         sassOptions: {
      //           indentedSyntax: true
      //         }
      //       }
      //     }
      //   ]
      // }
      {
        test: /\.scss$/,
        use: [
          'vue-style-loader',
          'css-loader',
          {
            loader: 'sass-loader',
            options: {
              // you can also read from a file, e.g. `variables.scss`
              // use `prependData` here if sass-loader version = 8, or
              // `data` if sass-loader version < 8
              additionalData: `$color: red;`
            }
          }
        ]
      }
      ,
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
        test: /\.(svg|gif)$/,
        include: /images/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name].[hash:6].[ext]',
              // outputPath: '/static/public/images',
              // publicPath: '/static/public/images',
              emitFile:true,
              esModule:false
            }
          }
        ]
      },
      {
        test:/\.(png|jpeg|jpg)$/i,
        use:[
          {
            loader: 'file-loader',
            options: {
              name: '[name].[hash:6].[ext]',
              // outputPath: '/images/',
              // publicPath: '/images/',
              // emitFile:true,
              // esModule:false
            }
          },
          {
            loader:'webp-loader',
            options:{
              quality:13
            }
          }
        ]
      }

    ]
  },
  resolve: { alias: { vue: 'vue/dist/vue.esm.js' } },
  plugins: [
    new VueLoaderPlugin(
      // [
      //   { from: "src/assets", to: "public" },
      // ]
    )
  ]
}
