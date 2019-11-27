const mongoose = require('mongoose');
const NoteSchema = mongoose.Schema({
    id:String,
    name:String,
    roll:Number
}, {
    timestamps: true
});

module.exports = mongoose.model('Note', NoteSchema);