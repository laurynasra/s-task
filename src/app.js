const { Router } = require('express');
const express = require('./services/express');
const router = new Router();
// Bind routes
router.use('/_health-check', require('./routes/v1/healthCheck/healthCheck')());
router.use('/quote', require('./routes/v1/quotes/quotes')());

module.exports = express('/api', router);
