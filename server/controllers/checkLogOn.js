const db = require('../models');
const isAuthenticated = require('../config/middleware/isAuthenticated');
const passport = require('../config/passport');

const checkLoggedOn = async (req, res) => {
    try {

        // const test = req.user;
        // const filter = { _id: req.user.id };
        // // const user1 = await res.json(req.user);
        // //const test = req.user;
        // const dummyUser = await db.User.findOne({
        //     where: {
        //         id: req.params.id
        //       }
        //     }
        // );


        return res.json("good logon");
    }
    catch (err) {
        res.status(401).json(err);
        // return res.json(err);

    }
};

exports.checkLoggedOn = checkLoggedOn;

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