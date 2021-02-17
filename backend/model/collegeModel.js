const mongoose = require('mongoose');

const collegeSchema = mongoose.Schema({
    id: Number,
    name: String,
    year_founded: Number,
    city: String,
    state: String,
    country: String,
    students: Number,
})

module.exports = mongoose.model('College', collegeSchema)