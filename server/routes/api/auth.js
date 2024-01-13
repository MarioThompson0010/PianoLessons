const router = require('express').Router();
const User = require('../../models/User');
const passport = require('../../config/passport');
const authController = require('../../controllers/auth');
const db = require('../../models');


router.post('/signup', (req, res) => {
    db.User.create(req.body)
      .then((user) => {
          res.json(user);
      })
      .catch((err) => {
        res.status(401).json(err);
      });
  });


module.exports = router;
