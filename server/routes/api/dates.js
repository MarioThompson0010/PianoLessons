const router = require('express').Router();
const User = require('../../models/User');
const passport = require('../../config/passport');
const authDates = require('../../controllers/dates');
const db = require('../../models');
const isAuthenticated = require('../../config/middleware/isAuthenticated');

router.use(isAuthenticated);
router.route('/getDates').get(authDates.dates);
router.route('/createDate').post(authDates.datesCreate);


// router.get('/getDates', isAuthenticated, (req, res) => {
//     const test = req.user;
//     db.CalendarModel.findAll({ include: [db.User] })
//       .then((dbCalendar) => {
//           res.json(dbCalendar);
//       })
//       .catch((err) => {
//         res.status(401).json(err);
//       });
//   });


module.exports = router;
