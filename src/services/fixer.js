const axios = require('axios');
const { FIXER_API_KEY } = require('../config');
const FIXER_API_BASE = 'http://data.fixer.io/api';


module.exports = {
  async getLatestPricesForBase(base) {
    const URL = `${FIXER_API_BASE}/latest`;
    try {
      const result = await axios.get(URL, {
        params: {
          access_key: FIXER_API_KEY,
          base,
        },
      });
      if (!result.data.success) {
        console.error('Failed to fetch rates from Fixer', result.data.error.info);
        return null;
      }
      return result.data;
    } catch (err) {
      console.error('Failed to fetch rates from Fixer', err);
      return null;
    }
  },
};
