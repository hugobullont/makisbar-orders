const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.urlencoded({extended: true}));

app.use(bodyParser.json());

app.get('/', (req,res) =>{
    res.json({"message": "Welcome to makisBar - Orders MicroService"});
});

require('./app/routes/order.routes.js')(app);

app.listen(5050, () => {
    console.log("Server is listening on port 5050");
});

const dbConfig = require('./config/database.config.js');
const mongoose = require('mongoose');

mongoose.Promise = global.Promise;

mongoose.connect(dbConfig.url, {
    useNewUrlParser: true
}).then(() => {
    console.log("Successfully connected to the database");
}).catch(err => {
    console.log('Not Connected');
    process.exit();
});