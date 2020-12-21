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
        type: String,
    },
});

Folder.plugin(normalize);

module.exports = mongoose.model("Folder", Folder);