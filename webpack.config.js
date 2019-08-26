const path = require('path');
const webpack = require('webpack');
const flowright = require('lodash.flowright');
const TerserPlugin = require('terser-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const NODE_ENV = process.env.NODE_ENV || '';

function generateBaseConfig() {
  const config = {
    context: path.resolve(__dirname),
    entry: {
      app: ['./src/index.js'],
    },
    output: {
      path: path.resolve(__dirname, 'dist'),
      filename: '[name].js',
      publicPath: '/',
    },
    mode: '',
    devtool: '',
    resolve: {
      extensions: ['*', '.js', '.jsx'],
    },
    module: {},
    plugins: [
      new HtmlWebpackPlugin({
        template: './src/index.html',
        title: 'Over Engineered Todo List App',
      }),
    ],
  }

  return config
}

function applyEnv(config) {
  let newConfig;

  if (NODE_ENV === 'production') {
    newConfig = {
      ...config,
      mode: 'production',
      devtool: 'source-map',
      optimization: {
        runtimeChunk: 'single',
        splitChunks: {
          cacheGroups: {
            vendor: {
              test: /[\\/]node_modules[\\/]/,
              chunks: 'initial',
              enforce: true,
            },
          },
        },
        minimizer: [
          new TerserPlugin({
            sourceMap: true,
            parallel: true,
          }),
        ],
      },
    };
  } else {
    newConfig = {
      ...config,
      mode: 'development',
      devtool: 'cheap-module-eval-source-map',
      devServer: {
        port: 3000,
        historyApiFallback: true,
        hot: true,
        open: true,
        overlay: true,
      },
    };
  }

  return newConfig;
}

function applyLoaders(config) {
  let newConfig;

  newConfig = {
    ...config,
    module: {
      rules: [{
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
      }],
    },
  };

  return newConfig;
}

const configurate = flowright(
  applyLoaders,
  applyEnv,
  generateBaseConfig,
);

module.exports = configurate();
