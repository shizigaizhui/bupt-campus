/*
 * @Author: zhengyu
 * @Date: 2021-08-09 16:36:16
 * @LastEditTime: 2021-08-12 17:25:22
 * @LastEditors: Please set LastEditors
 * @Description: 配置webpack,见 https://webpack.docschina.org/guides
 * @FilePath: \bupt-campus\webpack.config.js
 */
const path = require( 'path' );
const htmlPlugin = require( 'html-webpack-plugin');

module.exports = {
  mode:'development',
  entry: {
    index:'./src/index.js',
  },
  output:{
    filename:'[name].bundle.js',
    path:path.resolve(__dirname,'dist'),
    clean:true
  },
  module:{
    rules:[
      {
        test:/\.(js|jsx)$/,
        exclude:/(node_modules)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-react']
          }
        }
      },
      {
        test: /\.css$/,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              importLoaders: 1,
              modules: true
            }
          }
        ],
        include: /\.module\.css$/
      },
      {
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader'
        ],
        exclude: /\.module\.css$/
      },
      {
        test:/\.(png|svg|jpeg|jpg|gif|ico)$/i,
        type:'asset/resource'
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/i,
        type: 'asset/resource',
      },
    ]
  },

  plugins:[
    new htmlPlugin({
      title:"十字改锥",
      favicon:'./favicon.ico',
      template: './index.html'
    })
  ],

  resolve:{
    extensions:['.js','.jsx','.json']
  },

  devtool: 'inline-source-map',
  devServer:{
    contentBase: './dist',
  }
}