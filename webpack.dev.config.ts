import path from 'path'
import { Configuration, HotModuleReplacementPlugin } from 'webpack'
import HtmlWebpackPlugin from 'html-webpack-plugin'
import MiniCssExtractPlugin from 'mini-css-extract-plugin'

const config: Configuration = {
  mode: 'development',
  output: {
    publicPath: '/'
  },
  entry: './src/index.tsx',
  module: {
    rules: [
      {
        test: /\.(ts|js)x?$/i,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react', '@babel/preset-typescript']
          }
        }
      },
      // {
      //   test: /\.tsx?$/,
      //   resolve: {
      //     extensions: ['.tsx', '.ts', '.js']
      //   },
      //   exclude: /node_modules/,
      //   use: {
      //     loader: 'ts-loader'
      //   }
      // },
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader', 'postcss-loader']
      }
    ]
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js']
  },
  plugins: [
    new MiniCssExtractPlugin(),
    new HtmlWebpackPlugin({
      template: 'src/index.html'
    }),
    new HotModuleReplacementPlugin()
  ],
  //devtool: "inline-source-map",
  devtool: 'cheap-module-source-map',
  //stats: 'minimal',

  devServer: {
    static: path.join(__dirname, 'build'),
    historyApiFallback: true,
    port: 4000,
    open: true,
    hot: true
  }
}

export default config
