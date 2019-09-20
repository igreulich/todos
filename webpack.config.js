const path = require('path');
const flow = require('lodash.flow');
const TerserPlugin = require('terser-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const MODES = {
  PRODUCTION: 'production',
  DEVELOPMENT: 'development',
  TEST: 'test',
};
const env = process.env.NODE_ENV || MODES.DEVELOPMENT;

function generateBaseConfig() {
  let devtool;
  let mode;

  if (env === MODES.PRODUCTION) {
    devtool = 'source-map';
    mode = MODES.PRODUCTION;
  } else {
    devtool = 'cheap-module-eval-source-map';
    mode = MODES.DEVELOPMENT;
  }

  return {
    context: path.resolve(__dirname),
    entry: {
      app: ['react-hot-loader/patch', './src/index.js'],
    },
    output: {
      path: path.resolve(__dirname, 'dist'),
      filename: '[name].js',
      publicPath: '/',
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: './src/index.html',
        title: 'Over Engineered Todo List App',
      }),
    ],
    resolve: {
      extensions: ['*', '.js', '.jsx'],
      alias: {
        'react-dom': '@hot-loader/react-dom',
      },
    },
    devtool,
    mode,
  };
}

function applyLoaders(config) {
  const styleLoader = (env === MODES.PRODUCTION) ? MiniCssExtractPlugin.loader : 'style=loader';

  return {
    ...config,
    module: {
      rules: [{
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        loader: ['babel-loader', 'eslint-loader'],
      }, {
        test: /\.less$/,
        use: [styleLoader, 'css-loader', 'less-loader'],
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
}

function applyPlugins(config) {
  let { plugins } = config;

  if (env === MODES.PRODUCTION) {
    plugins = [
      ...plugins,
      new MiniCssExtractPlugin({
        filename: 'public/styles/[name].css',
      }),
    ];
  } else {
    plugins = [
      ...plugins,
    ];
  }

  return {
    ...config,
    plugins,
  };
}

function applyOptimizations(config) {
  const optimization = {
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
  };

  return {
    ...config,
    optimization: env === MODES.PRODUCTION ? optimization : null,
  };
}

function applyServer(config) {
  const devServer = {
    port: 3000,
    historyApiFallback: true,
    hot: true,
    open: true,
    overlay: true,
  };

  return {
    ...config,
    devServer: (env === MODES.DEVELOPMENT) ? devServer : null,
  };
}

const configurate = flow(
  generateBaseConfig,
  applyLoaders,
  applyPlugins,
  applyOptimizations,
  applyServer,
);

module.exports = Object.entries(configurate()).reduce(
  (a, [k, v]) => (v == null ? a : { ...a, [k]: v }),
  {},
);
