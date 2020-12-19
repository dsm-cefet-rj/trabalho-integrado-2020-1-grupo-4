var mongoose = require("mongoose");
var passportLocalMongose = require("passport-local-mongoose");


var User = mongoose.Schema({
    name: {
        type: String
    },
});

User.plugin(passportLocalMongose);

module.exports = mongoose.model("User", User);