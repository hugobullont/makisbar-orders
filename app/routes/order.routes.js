module.exports = (app) => {
    const orders = require('../controllers/order.controllers.js');

    app.get('/makisBar-orders/api/v1/orders', orders.findAll);
    app.get('/makisBar-orders/api/v1/UnattendedOrders', orders.findOnlyUnattendedOrders);
    app.post('/makisBar-orders/api/v1/order',orders.addOne);
    app.put('/makisBar-orders/api/v1/order/:id', orders.finishOrder);
};