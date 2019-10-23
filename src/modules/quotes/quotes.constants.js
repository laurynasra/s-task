class QuoteException extends Error {
  constructor(error, ...args) {
    super(...args);
    this.path = error.path;
    this.status = error.status;
    this.message = error.message;
    this.error = error.error;
    Error.captureStackTrace(this, QuoteException);
  }
}

module.exports = {
  QuoteException,

  MESSAGES: {
    UNHANDLED_ERROR: 'UNHANDLED_ERROR',
  },
};
