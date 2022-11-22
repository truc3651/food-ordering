const path = require('path')
const slsw = require('serverless-webpack')
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin')

module.exports = {
  entry: slsw.lib.entries,
  output: {
    path: path.resolve(__dirname, '.webpack'),
    filename: '[name].js',
    clean: true
  },
  mode:
    slsw.lib.webpack.isLocal || process.env['NODE_ENV'] === 'dev' ? 'development' : 'production',
  devtool: 'source-map',
  watch: true,
  plugins: [new ForkTsCheckerWebpackPlugin()],
  externals: ['graphql-scalars', 'apollo-server-lambda'],
  optimization: {
    splitChunks: {
      chunks: 'all'
    }
  },
  module: {
    rules: [
      {
        test: /\.(ts|js)$/,
        exclude: [
          [
            path.resolve(__dirname, 'node_modules'),
            path.resolve(__dirname, '.serverless'),
            path.resolve(__dirname, '.webpack')
          ]
        ],
        use: [
          {
            loader: 'babel-loader',
            options: {
              cacheDirectory: true
            }
          }
        ]
      },
      {
        test: /\.graphql$/i,
        exclude: /node_modules/,
        use: 'raw-loader'
      },
      {
        test: /\.sql$/i,
        exclude: /node_modules/,
        use: 'raw-loader'
      }
    ]
  },
  resolve: {
    extensions: ['.json', '.ts', '.sql', '.graphql'],
    symlinks: false,
    cacheWithContext: false,
    alias: {
      functions: path.resolve(__dirname, 'functions'),
      utils: path.resolve(__dirname, 'utils'),
      types: path.resolve(__dirname, 'types'),
      keys: path.resolve(__dirname, 'keys'),
      services: path.resolve(__dirname, 'services')
    }
  }
}
