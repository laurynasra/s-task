class QuotesError extends Error {
  constructor(error, ...args) {
    super(...args);

    this.path = error.path;
    this.status = error.status;
    this.message = error.message;
    this.error = error;
    Error.captureStackTrace(this, QuotesError);
  }
}

module.exports = {
  QuotesError,
  MESSAGES: {
    UNHANDLED_ERROR: 'Something is wrong. Try again later',
  },
};
