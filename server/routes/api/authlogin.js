const router = require('express').Router();
const User = require('../../models/User');
const passport = require('../../config/passport');
const authControllerLogin = require('../../controllers/authlogin');
const db = require('../../models');

router.use(passport.authenticate('local'));

router.route('/login').post(authControllerLogin.login);

module.exports = router;