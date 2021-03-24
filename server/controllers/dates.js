const db = require('../models');
const isAuthenticated = require('../config/middleware/isAuthenticated');
const passport = require('../config/passport');

const dates = async (req, res) => {
    try {

        const test = req.user;
        // const user1 = await res.json(req.user);
        const dbCalendar = await db.CalendarModel.findAll({
            where: { id: req.user.id }
           // include: [db.User]

        });
        // {
        //     where: { id: req.params.id },
        //     include: [db.Post, db.User]
        //   }
        return res.json(dbCalendar);
        // return res.json(user1);
    }
    catch (err) {
        res.status(401).json(err);
        // return res.json(err);

    }
};

const datesCreate = async (req, res) => {

    try {
        const id = req.params.id;
        const intcat = parseInt(id);
        const test = req.user;

        const createDate = {
            dateStart: req.body.dateStart,
            dateEnd: req.body.dateEnd,
            title: req.body.title,
            UserId: req.user.id
        };

        const dbCalendar = await db.CalendarModel.create(createDate);
        return res.json(dbCalendar);
        // return res.json(user1);

        // db.Post.create(createpost).then(function (dbPost) {
        //       res.json(dbPost);
        //     });
    }
    catch (err) {
        res.status(401).json(err);
        // return res.json(err);

    }

}

exports.dates = dates;
exports.datesCreate = datesCreate;

// const intcat = parseInt(req.body.CategoryId);

//     const createpost = {
//       UserId: req.user.id,
//       title: req.body.title,
//       body: req.body.body,
//       CategoryId: intcat
//     };

//     console.log(createpost);

//     db.Post.create(createpost).then(function (dbPost) {
//       res.json(dbPost);
//     });