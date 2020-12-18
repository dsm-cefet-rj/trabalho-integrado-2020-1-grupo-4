var mongoose = require("mongoose");
var passportLocalMongose = require("passport-local-mongoose");
const normalize = require('normalize-mongoose');


var Folder = mongoose.Schema({
    folderName: {
        type: String,
        required: true,
        minLength: 5, 
        maxLenght: 32,
    },
    attachments: {
        type: mongoose.Types.ObjectId,
        ref: "attach"
    },
});

Folder.plugin(normalize);

module.exports = mongoose.model("Folder", Folder);