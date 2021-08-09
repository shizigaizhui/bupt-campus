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
        test:/\.css$/i,
        use:['style-loader', 'css-loader']
      },
      {
        test:/\.(png|svg|jpeg|jpg|gif|ico)$/i,
        type:'asset/resource'
      }
    ]
  },

  plugins:[
    new htmlPlugin({
      title:"十字改锥",
      favicon:'./favicon.ico',
      template: './index.html'
    })
  ],

  devtool: 'inline-source-map',
  devServer:{
    contentBase: './dist',
  }
}