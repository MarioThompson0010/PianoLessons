const router = require('express').Router();
const authRoutes = require('./auth');
const authRoutesLogin = require('./authlogin');

router.use('/auth', authRoutes);
router.use('/authlogin', authRoutesLogin);

module.exports = router;
