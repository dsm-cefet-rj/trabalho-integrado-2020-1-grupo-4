var express = require("express");
var router = express.Router();

var User = require("../models/user");
var passport = require("passport");
var authenticate = require("../authenticate");

router.post("/signup", ( req, res, next ) => {
    User.register(new User({ username: req.body.username, nome: req.body.nome }), req.body.password,
    ( err, user ) => {
        if (err) {
            res.statusCode = 500;
            res.setHeader("Content-Type", "application/json");
            res.json( { err: err } );
        } else {
            res.statusCode = 201;
            passport.authenticate("local")( req, res, () => {
                res.setHeader("Content-Type", "application/json");
                res.json( { success: true, status: "Registration Succesful!" } );
            });
        };
    });
});

router.post("/login", passport.authenticate("local", {session: false}), ( req, res ) => {
    var token = authenticate.getToken( { _id: req.user._id } );
    res.setHeader("Content-Type", "application/json");
    res.json( { success: true, token: token, status: "You are Logged in.", _id: req.user._id  } )
});

module.exports = router;