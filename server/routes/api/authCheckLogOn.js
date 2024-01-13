const router = require('express').Router();
const passport = require('../../config/passport');
const authCheckLoggedOn = require('../../controllers/checkLogOn');
const db = require('../../models');
const isAuthenticated = require('../../config/middleware/isAuthenticated');

router.use(isAuthenticated);
router.route('/getAuthCheck').get(authCheckLoggedOn.checkLoggedOn);

module.exports = router;
