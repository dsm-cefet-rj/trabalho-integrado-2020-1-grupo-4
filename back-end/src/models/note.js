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
    owner_id : {
        type: mongoose.Types.ObjectId,
        ref: owneID,
    },
});

Note.plugin(normalize);

module.exports = mongoose.model("Note", Note);