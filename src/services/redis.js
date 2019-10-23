const redis = require('redis');
const Promise = require('bluebird');

Promise.promisifyAll(redis);
const client = redis.createClient();

client.on('error', err => console.log(`Redis Error ${err}`));

module.exports = client;
