const express = require('express');
const productsRouter = require('./controller.product');

function routerApi(app) {
    const router = express.Router();
    router.use('/products', productsRouter)
}

module.exports = routerApi;