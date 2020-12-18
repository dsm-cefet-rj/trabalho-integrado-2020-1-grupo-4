var express = require("express");
var router = express.Router();

const bodyParser = require("body-parser");
var User = require("../models/user");
var passport = require("passport");
var authenticate = require("../authenticate");

router.use(bodyParser.json());

router.post("/signup", ( req, res, next ) => {
    User.register(new User({ username: req.body.username }), req.body.password,
    ( err, user ) => {
        if (err) {
            res.statusCode = 500;
            res.setHeader("Content-Type", "application/json");
            res.json( { err: err } );
        } else {
            passport.authenticate("local")( req, res, () => {
                //Talvez nao necessario a linha 20 (TESTAR)
                res.statusCode = 200;
                res.setHeader("Content-Type", "application/json");
                res.json( { success: true, status: "Registration Succesful!" } );
            });
        };
    });
});

router.post("/login", passport.authenticate("local"), ( req, res ) => {
    var token = authenticate.getToken( { _id: req.user._id } );
    //Talvez nao necessario a linha 32 (TESTAR)
    res.statusCode = 200;
    res.setHeader("Content-Type", "application/json");
    res.json( { success: true, token: token, status: "You are Logged in."  } )
});

//Checar, http://www.passportjs.org/docs/logout/
router.get("/logout", ( req, res ) => {
    req.logOut();
    res.redirect("/")
});

module.exports = router;