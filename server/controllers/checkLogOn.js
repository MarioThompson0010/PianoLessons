const db = require('../models');
const isAuthenticated = require('../config/middleware/isAuthenticated');
const passport = require('../config/passport');

const checkLoggedOn = async (req, res) => {
    try {

        

        return res.json("good logon");
    }
    catch (err) {
        res.status(401).json(err);
        // return res.json(err);

    }
};

exports.checkLoggedOn = checkLoggedOn;

