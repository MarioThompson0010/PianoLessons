const db = require('../models');
// const isAuthenticated = require('../config/middleware/isAuthenticated');
const passport = require('../config/passport');

// const login = async (req, res) => {
//   res.json(req.user);
// };

module.exports = {
  signup: (req, res) => {

    db.User.create(req.body)
      .then((user) => {
        res.json(user);
        //res.redirect(307, '/loginAfterSignup'); // this goes to the app.post
      })
      .catch((err) => {
        res.status(401).json(err);
      });

  },


  // passport.authenticate('local', {
  //   successRedirect: '/',
  //   failureRedirect: '/login',
  // })(req, res);


  login: async (req, res) => {
    passport.authenticate('local', {

      successRedirect: '/',
      failureRedirect: '/login',

    })(req, res);

    const user = await res.json(req.user);
    return user;
  }
}

//exports.login = login;
