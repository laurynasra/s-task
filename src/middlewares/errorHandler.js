const HttpStatus = require('http-status-codes');
const { MESSAGES } = require('../modules/quotes/quotes.constants');

module.exports = {
  errorHandler(err, req, res, next) {
    console.error({
      message: MESSAGES.UNHANDLED_ERROR,
      details: {
        err,
      },
    });
    res.status(err.status || HttpStatus.INTERNAL_SERVER_ERROR).send({
      message: err.message,
    });
    next(err);
  },
};
