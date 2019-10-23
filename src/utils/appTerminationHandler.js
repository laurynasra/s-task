const APP_KILL_SIGNALS = {
  SIGHUP: 1,
  SIGINT: 2,
  SIGTERM: 15,
};

const onAppTermination = (appKillHandler) => {
  Object.keys(APP_KILL_SIGNALS).forEach((signal) => {
    process.on(signal, () => {
      // eslint-disable-next-line no-console
      console.log(`process received a ${signal} signal`);
      appKillHandler(signal, APP_KILL_SIGNALS[signal]);
    });
  });
};

module.exports = onAppTermination;
