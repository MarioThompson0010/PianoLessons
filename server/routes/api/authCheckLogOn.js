const router = require('express').Router();
//const User = require('../../models/User');
const passport = require('../../config/passport');
//const authDates = require('../../controllers/dates');
const authCheckLoggedOn = require('../../controllers/checkLogOn');
const db = require('../../models');
const isAuthenticated = require('../../config/middleware/isAuthenticated');

router.use(isAuthenticated);
router.route('/getAuthCheck').get(authCheckLoggedOn.checkLoggedOn);

//router.route('/getDates').get(authDates.dates);
module.exports = router;
