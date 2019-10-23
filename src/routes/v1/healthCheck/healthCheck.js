const express = require('express');
const router = express.Router();
const HttpStatus = require('http-status-codes');
const { QuoteException } = require('../../../constants');

const route = () => {
  // TODO: restrict this route
  router.get('/', async (req, res, next) => {
    try {
      res.status(HttpStatus.OK).send();
    } catch (e) {
      const error = new QuoteException({
        error: e,
        path: 'GET /_health_check',
      });

      next(error);
    }
  });

  return router;
};

module.exports = route;
