const router = require('express').Router();
const User = require('../../models/User');
const passport = require('../../config/passport');
const authDates = require('../../controllers/dates');
const db = require('../../models');
const isAuthenticated = require('../../config/middleware/isAuthenticated');

//router.use(passport.authenticate('local'));
//router.route('/getDates').get(authDates.dates);


router.get('/getDates', isAuthenticated, (req, res) => {
    const test = req.user;
    db.CalendarModel.findAll({ include: [db.User] })
      .then((dbCalendar) => {
          res.json(dbCalendar);
      })
      .catch((err) => {
        res.status(401).json(err);
      });
  });


module.exports = router;