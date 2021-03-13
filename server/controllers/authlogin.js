const db = require('../models');
const isAuthenticated = require('../config/middleware/isAuthenticated');
const passport = require('../config/passport');


const login = async (req, res) => {
    try {

        const user1 = await res.json(req.user);

        return res.json(user1);
    }
    catch(err){
       // return res.json(err);
       
    }
   

};



exports.login = login;