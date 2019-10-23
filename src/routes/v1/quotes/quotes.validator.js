const Joi = require('joi');

module.exports = {
  quotesSchema: {
    required_currency_code: Joi.string().required(),
    paying_currency_code: Joi.string().required(),
    amount: Joi.number().required(),
  },
};
