const common = {
  env: process.env.NODE_ENV || 'development',
  serviceName: 'Quotes API',
  // Express settings
  port: process.env.NODE_PORT || 8000,
  ip: process.env.NODE_IP || '0.0.0.0',
  FIXER_API_KEY: process.env.FIXER_API_KEY || '4dbf5cb219b3d435806705032052ae63',
  MAX_DECIMAL_POINTS: '6',
};

const config = {
  production: {
  },

  development: {
  },

  test: {
  },
};

module.exports = {
  ...common,
  ...config[common.env],
};
