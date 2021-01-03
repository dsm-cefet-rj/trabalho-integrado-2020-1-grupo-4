var mongoose = require("mongoose");

var Note = mongoose.Schema({
    noteName: {
        type: String,
    },
    contents: {
        type: String,
    },
    attachments: {
        type: Array,
    },
    owner_id : {
        type: mongoose.Types.ObjectId,
        ref: "User",
    },
}, {timestamps: { createdAt: 'created_at', updatedAt: 'updated_at' }});

module.exports = mongoose.model("Note", Note);
