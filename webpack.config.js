const path = require('path')
const slsw = require('serverless-webpack')

async function config() {
  return {
    entry: slsw.lib.entries,
    target: 'node',
    watch: true,
    mode: 'development',
    optimization: {
      minimize: false
    },
    devtool: 'eval',
    externals: ['graphql-scalars', 'apollo-server-lambda', 'pg'],
    module: {
      rules: [
        {
          test: /\.(ts)$/,
          loader: 'ts-loader',
          exclude: [
            [
              path.resolve(__dirname, 'node_modules'),
              path.resolve(__dirname, '.serverless'),
              path.resolve(__dirname, '.webpack')
            ]
          ],
          options: {
            transpileOnly: true,
            experimentalWatchApi: true
          }
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
    output: {
      libraryTarget: 'commonjs2',
      path: path.join(__dirname, '.webpack'),
      filename: '[name].js',
      sourceMapFilename: '[file].map',
      clean: true
    },
    resolve: {
      extensions: ['.json', '.ts', '.js', '.sql'],
      symlinks: false,
      cacheWithContext: false,
      alias: {
        functions: path.resolve(__dirname, 'functions'),
        utils: path.resolve(__dirname, 'utils'),
        keys: path.resolve(__dirname, 'keys'),
        services: path.resolve(__dirname, 'services'),
        types: path.resolve(__dirname, 'types')
      }
    }
  }
}

module.exports = config()
