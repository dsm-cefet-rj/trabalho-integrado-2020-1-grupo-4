var mongoose = require("mongoose");
var passportLocalMongose = require("passport-local-mongoose");
const normalize = require('normalize-mongoose');


var Note = mongoose.Schema({
    contents: {
        type: String,
    },
    attachments: {
        type: mongoose.Types.ObjectId,
        ref: "attach"
    },
});

Note.plugin(normalize);

module.exports = mongoose.model("Note", Note);