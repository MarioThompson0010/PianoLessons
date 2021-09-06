const router = require('express').Router();
const apiRoutes = require('./api');
//const apiRoutesView = require('.ViewDates/api');

// API Routes
router.use('/api', apiRoutes);

module.exports = router;
