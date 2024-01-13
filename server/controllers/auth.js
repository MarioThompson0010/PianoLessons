const db = require('../models');
const isAuthenticated = require('../config/middleware/isAuthenticated');
const passport = require('../config/passport');


module.exports = {
  // this isn't used but I guess it could be
  signup:  (req, res) => {

    

    db.User.create(req.body)
      .then((user) => {
        res.json(user);
      })
      .catch((err) => {
        res.status(401).json(err);
      });

  },


  
}

