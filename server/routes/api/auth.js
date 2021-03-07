const router = require('express').Router();
const User = require('../../models/User');
const passport = require('../../config/passport');
const authController = require('../../controllers/auth');

router.use(passport.authenticate('local'));

// Matches with '/api/auth/login'
router.route('/login').post(authController.login);

router.route('/signup').post(authController.signup);
// router.route('/login').post(authController.login);

// router.post('/signup', (req, res) => {
//     db.User.create(req.body)
//       .then(() => {
//         res.redirect(307, '/loginAfterSignup'); // this goes to the app.post
//       })
//       .catch((err) => {
//         res.status(401).json(err);
//       });
//   });


module.exports = router;
