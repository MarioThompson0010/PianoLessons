// const db = require('../models');
// const isAuthenticated = require('../config/middleware/isAuthenticated');
// const passport = require('../config/passport');

// const dates = async (req, res) => {
//     try {

//         const user1 = await res.json(req.user);

//         return res.json(user1);
//     }
//     catch(err){
//        // return res.json(err);
       
//     }
// };

// exports.dates = dates;

// router.get('/getDates', isAuthenticated, (req, res) => {
//     const test = req.user;
//     db.CalendarModel.findAll({ include: [db.User] })
//       .then((dbCalendar) => {
//           res.json(dbCalendar);
//         //res.redirect(307, '/loginAfterSignup'); // this goes to the app.post
//       })
//       .catch((err) => {
//         res.status(401).json(err);
//       });
//   });
