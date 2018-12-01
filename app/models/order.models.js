const mongoose = require('mongoose');
require('../models/product.models.js')
const OrderSchema = mongoose.Schema({
    status: Boolean,
    products: [mongoose.model('Product').schema]
});

module.exports = mongoose.model('Order',OrderSchema);