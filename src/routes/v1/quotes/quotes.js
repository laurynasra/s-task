const express = require('express');
const HttpStatus = require('http-status-codes');
const Big = require('big.js');
const { MAX_DECIMAL_POINTS } = require('../../../config');

const router = express.Router();
const { QuotesError } = require('../../../modules/quotes/quotes.constants');
const { getRate } = require('../../../modules/quotes/rates');

const route = () => {
  router.get('/', async (req, res, next) => {
    const {
      required_currency_code: requiredCurrencyCode,
      amount,
      paying_currency_code: payingCurrencyCode,
    } = req.query;

    try {
      const rate = await getRate({
        from: requiredCurrencyCode,
        to: payingCurrencyCode,
      });

      if (!rate) {
        return res.status(HttpStatus.NOT_FOUND).send({ error: 'Rate for given currency was not found' });
      }

      return res.send({
        paying_currency_code: payingCurrencyCode,
        // Native floating point math with JS for financial sector is risky business
        // i.e.: 536.11692.toFixed(13) === "536.1169200000001"
        // or 0.1 + 0.2 != 0.3
        // Big.js deals with it the correct way
        amount: Big(amount).times(rate).toFixed(MAX_DECIMAL_POINTS),
      }).status(200);
    } catch (e) {
      const error = new QuotesError({
        error: e,
        path: 'GET /quotes',
        status: HttpStatus.INTERNAL_SERVER_ERROR,
      });

      next(error);
    }
  });

  return router;
};

module.exports = route;
