const db = require('../models');
const isAuthenticated = require('../config/middleware/isAuthenticated');
const passport = require('../config/passport');

// const login = async (req, res) => {
//   res.json(req.user);
// };

module.exports = {
  signup: (req, res) => {

    // passport.authenticate('local', {

    //   successRedirect: '/',
    //   failureRedirect: '/login',

    // })(req, res);


    db.User.create(req.body)
      .then((user) => {
        res.json(user);
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

    try{
      const user = await res.json(req.user);
      return res.json(user);
    }
    catch(err){
      return err;
    }
    
  }
}

//exports.login = login;
