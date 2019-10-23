const helmet = require('helmet');
const express = require('express');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const { errorHandler } = require('../../middlewares');

module.exports = (apiRoot, routes) => {
  const app = express();
  // Security measures
  app.use(cors({
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    preflightContinue: false,
    optionsSuccessStatus: 204,
  }));
  app.use(helmet());
  app.use(helmet.noCache());
  app.use(helmet.frameguard());

  app.use(bodyParser.urlencoded({ extended: false }));
  app.use(bodyParser.json());
  app.use(cookieParser());
  app.use(apiRoot, routes);
  app.use(errorHandler);
  return app;
};
