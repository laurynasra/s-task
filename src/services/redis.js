const redis = require('redis');
const Promise = require('bluebird');

const { REDIS_URL } = require('../config');

Promise.promisifyAll(redis);
const client = redis.createClient(REDIS_URL);

client.on('error', err => console.log(`Redis Error ${err}`));

module.exports = client;
