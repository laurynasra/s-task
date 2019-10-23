const HttpStatus = require('http-status-codes');
const { MESSAGES } = require('../constants');

module.exports = {
  errorHandler(err, req, res, next) {
    console.error({
      details: {
        err,
      },
    });
    res.status(err.status || HttpStatus.INTERNAL_SERVER_ERROR).send({
      message: MESSAGES.UNHANDLED_ERROR,
    });
    next(err);
  },
};
