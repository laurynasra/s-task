const request = require('supertest');
const api = require('../../../app');

describe('Health check API endpoint', () => {
  it('GET /_health-check 200', () => request(api)
    .get('/api/_health-check')
    .expect(200)
    .then((res) => {
      expect(typeof res)
        .toBe('object');
    }));
});
