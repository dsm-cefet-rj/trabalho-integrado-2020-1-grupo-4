var mongoose = require("mongoose");

var Note = mongoose.Schema({
    noteName: {
        type: String,
    },
    contents: {
        type: String,
    },
    attachments_name: {
        type: String,
    },
    attachments: {
        type: String,
    },
    owner_id : {
        type: mongoose.Types.ObjectId,
        ref: "User",
    },
    create_date : {
        type: Date,
    },
});

module.exports = mongoose.model("Note", Note);