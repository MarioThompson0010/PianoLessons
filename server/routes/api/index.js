const router = require('express').Router();
const authRoutes = require('./auth');
const authRoutesLogin = require('./authlogin');
const authRoutesDates = require('./dates');

router.use('/auth', authRoutes);
router.use('/authlogin', authRoutesLogin);
router.use('/dates', authRoutesDates);

module.exports = router;
