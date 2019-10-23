const { getLatestPricesForBase } = require('../../services/fixer');
const redisClient = require('../../services/redis');
const CACHE_LENGTH_IN_SECONDS = 10;

module.exports = {
  async getRate({ from, to }) {
    const key = `rates:${from}`;
    const cachedResultRaw = await redisClient.getAsync(key);
    if (cachedResultRaw) {
      const result = JSON.parse(cachedResultRaw);
      return result.rates[to];
    }
    const latestRates = await getLatestPricesForBase(from);
    if (!latestRates) {
      return null;
    }
    const rawRates = JSON.stringify(latestRates);
    await redisClient.setAsync(key, rawRates, 'EX', CACHE_LENGTH_IN_SECONDS);
    return latestRates.rates[to];
  },
};
