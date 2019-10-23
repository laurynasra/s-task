const common = {
  env: process.env.NODE_ENV || 'development',
  serviceName: 'Quotes API',
  // Express settings
  port: process.env.NODE_PORT || 8000,
  ip: process.env.NODE_IP || '0.0.0.0',
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
