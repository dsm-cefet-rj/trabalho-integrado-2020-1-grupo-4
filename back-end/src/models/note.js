var mongoose = require("mongoose");
var passportLocalMongose = require("passport-local-mongoose");
const normalize = require('normalize-mongoose');


var Note = mongoose.Schema({
    contents: {
        type: String,
    },
    attachments: {
        type: String,
    },
    owner_id : {
        type: mongoose.Types.ObjectId,
        ref: "ownerID",
    },
});

Note.plugin(normalize);

module.exports = mongoose.model("Note", Note);