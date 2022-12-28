import path from 'path'
import slsw from 'serverless-webpack'
import ForkTsCheckerWebpackPlugin from 'fork-ts-checker-webpack-plugin'
import webpack from 'webpack'

const config: webpack.Configuration = {
  entry: slsw.lib.entries,
  output: {
    path: path.resolve(__dirname, '.webpack'),
    filename: '[name].js',
    clean: true
  },
  mode:
    slsw.lib.webpack.isLocal || process.env['NODE_ENV'] === 'dev' ? 'development' : 'production',
  devtool: 'eval-cheap-module-source-map',
  watch: true,
  plugins: [new ForkTsCheckerWebpackPlugin()],
  optimization: {
    splitChunks: {
      chunks: 'all'
    }
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: 'ts-loader',
        options: {
          // If you want to speed up compilation significantly you can set this flag.
          // However, many of the benefits you get from static type checking between different dependencies in your application will be lost.
          transpileOnly: true
        },
        exclude: [
          [
            path.resolve(__dirname, 'node_modules'),
            path.resolve(__dirname, '.serverless'),
            path.resolve(__dirname, '.webpack')
          ]
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
    extensions: ['.mjs', '.json', '.ts', '.js', '.sql', '.graphql'],
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

export default config
