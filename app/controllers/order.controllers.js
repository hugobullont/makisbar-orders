const Order = require('../models/order.models.js');
const Product = require('../models/product.models.js');

exports.addOne = function(req,res){
    console.log('POST /api/v1/order');

    const order = new Order({
        status: false
    });

    const productsArray = req.body.products;
    for (var i = 0; i < productsArray.length; i++){
        const product = new Product({
            'name': productsArray[i].name,
            'type': productsArray[i].type
        });
        product.save();
        order.products.push(product);
    }

    order.save()
    .then(data => {
        res.send(data);
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Some error occurred while creating the order."
        });
    });
};

exports.findAll = (req,res) => {
    console.log('GET /api/v1/orders');
    Order.find()
    .then(order => {
        res.send(order);
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Some error occurred while retrieving orders."
        });
    });
};

exports.findOnlyUnattendedOrders = (req,res) => {
    console.log('GET /api/v1/UnattendedOrders');
    Order.find({'status':false})
    .then(order => {
        res.send(order);
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Some error occurred while retrieving orders."
        });
    });
};

exports.finishOrder = (req,res) => {
    console.log('PUT /api/v1/order/:id');
    const id = req.params.id;
    Order.findByIdAndUpdate(id,{$set: {'status': true}}, function(){
        return res.status(200).send({
            code: 1,
            message: "Order Finalizado con exito."
        });
    });
};