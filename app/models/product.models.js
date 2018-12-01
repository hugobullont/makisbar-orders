const mongoose = require('mongoose');

const ProductSchema = mongoose.Schema({
    name: String,
    type: String
});

module.exports = mongoose.model('Product', ProductSchema);