const db = require('../models');
const isAuthenticated = require('../config/middleware/isAuthenticated');
const passport = require('../config/passport');


const login = async (req, res) => {
    try {

        const user = await res.json(req.user);

        return res.json(user);
    }
    catch(err){
        return err;
    }
   

};



exports.login = login;