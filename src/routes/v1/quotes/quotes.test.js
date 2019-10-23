const request = require('supertest');
const api = require('../../../app');

describe('Quotes API endpoint', () => {
  describe('GET /quotes', () => {
    it('should return 400 if not all required params are passed', () => request(api)
      .get('/api/quote')
      .expect(400));
  });
});
