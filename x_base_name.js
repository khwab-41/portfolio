const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const art_base_Schema = new Schema({
    title: String,
    description: String,
    location: String,
    recommended_size: Number
});

mongoose.exports = mongoose.model('art_base', art_base_Schema);