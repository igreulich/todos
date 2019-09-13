const path = require('path');
const flowright = require('lodash.flowright');
const TerserPlugin = require('terser-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const NODE_ENV = process.env.NODE_ENV || '';

function generateBaseConfig() {
  const config = {
    context: path.resolve(__dirname),
    entry: {
      app: ['react-hot-loader/patch', './src/index.js'],
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
      alias: {
        'react-dom': '@hot-loader/react-dom',
      },
    },
    module: {},
    plugins: [
      new HtmlWebpackPlugin({
        template: './src/index.html',
        title: 'Over Engineered Todo List App',
      }),
    ],
  };

  return config;
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
  const devMode = NODE_ENV !== 'production';
  const newConfig = {
    ...config,
    module: {
      rules: [{
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        loader: ['babel-loader', 'eslint-loader'],
      }, {
        test: /\.less$/,
        use: [
          devMode ? 'style-loader' : MiniCssExtractPlugin.loader, 'css-loader', 'less-loader',
        ],
      }, {
        test: /\.(woff(2)?|ttf|eot|svg|png)(\?v=\d+\.\d+\.\d+)?$/,
        use: [{
          loader: 'file-loader',
          options: {
            name: '[name].[ext]',
          },
        }],
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
