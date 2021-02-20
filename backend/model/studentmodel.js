const mongoose = require('mongoose');

const studentSchema = mongoose.Schema({
    id: Number,
    name: String,
    batch: Number,
})

module.exports = mongoose.model('Student', studentSchema)