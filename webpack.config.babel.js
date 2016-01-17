import {join} from 'path'

export default {
  devtool: 'cheap-module-source-map',
  devServer: {
    contentBase: './dist'
  },
  entry: [
    './src/index.jsx'
  ],
  resolve: {
    extensions: ['', '.js', '.jsx']
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loaders: [
          'babel'
        ]
      }
    ]
  },
  output: {
    path: join(__dirname, 'dist'),
    publicPath: '/',
    filename: 'bundle.js'
  }
}
