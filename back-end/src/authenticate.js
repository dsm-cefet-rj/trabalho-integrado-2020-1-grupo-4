var User = require("./models/user");

var passport = require("passport");

var jwt = require("jsonwebtoken");
var JwtStrategy = require("passport-jwt").Strategy;
var ExtractJwt = require("passport-jwt").ExtractJwt;

var LocalStrategy = require("passport-local").Strategy;

const { appConfig } = require("./config");
const secretOrKey = appConfig.jwtSecret;


passport.use(new LocalStrategy(User.authenticate()));

exports.getToken = function( user ) {
    return jwt.sign( user, secretOrKey,
        {expiresIn: 1800});
};

var opts = {};
opts.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();
opts.secretOrKey = secretOrKey;


exports.jwtPassport = passport.use(new JwtStrategy( opts,
    ( jwt_payload, done ) => {
        User.findOne({ _id: jwt_payload._id }, ( err, user ) => {
            if (err) {
                return done(err);
            }
            else if (user) {
                return done(null, user);
            }
            else {
                return done(null, false);
            }
        });
    }
));

exports.verifyUser = passport.authenticate('jwt', {session: false});