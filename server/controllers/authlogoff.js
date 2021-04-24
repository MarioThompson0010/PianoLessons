const db = require('../models');
const isAuthenticated = require('../config/middleware/isAuthenticated');
const passport = require('../config/passport');


const logoff = async (req, res) => {
    try {

        req.logout();
        res.json({ 'send to login': true });
    }
    catch (err) {
        res.status(401).send({ success: false, msg: 'logout failed.' });

    }
};

exports.logoff = logoff;