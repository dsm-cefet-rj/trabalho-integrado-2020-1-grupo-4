var mongoose = require("mongoose");
var passportLocalMongose = require("passport-local-mongoose");


var User = mongoose.Schema({
    id: {
        type : String,
        required: true,
    },
});

User.plugin(passportLocalMongose);

module.exports = mongoose.model("User", User);