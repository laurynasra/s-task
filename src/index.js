const onAppTermination = require('./utils/appTerminationHandler');
const {
  env,
  serviceName,
  port,
  ip,
} = require('./config');

const redisClient = require('./services/redis');

const app = require('./app');

// Start the server on port 8000 or process.env.PORT
const server = app.listen(port, ip, () => {
  console.info('%s (%s) listening at http://%s:%s', serviceName, env, ip, port);
});

onAppTermination((signal, signalCode) => {
  server.close(async () => {
    await redisClient.end(true);
    console.info(`server stopped by ${signal} with value ${signalCode}`);
    process.exit(0);
  });
});

module.exports = server;
