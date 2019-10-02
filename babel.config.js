const MODES = {
  PRODUCTION: 'production',
  DEVELOPMENT: 'development',
  TEST: 'test',
};
const env = process.env.NODE_ENV || MODES.DEVELOPMENT;

module.exports = (api) => {
  api.cache(true);

  const presets = [
    '@babel/preset-env',
    '@babel/preset-react',
  ];
  const plugins = [
    'react-hot-loader/babel',
    '@babel/plugin-proposal-class-properties',
  ];

  if (env === MODES.TEST) plugins.push('@babel/plugin-transform-runtime');

  return {
    plugins,
    presets,
  };
};
