const router = require('express').Router();
const User = require('../../models/User');
const passport = require('../../config/passport');
const authlogoff = require('../../controllers/authlogoff');
const db = require('../../models');
const isAuthenticated = require('../../config/middleware/isAuthenticated');

router.use(isAuthenticated);
router.route('/dologoff').post(authlogoff.logoff);



module.exports = router;
