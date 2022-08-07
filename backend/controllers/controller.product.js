const express = require('express');

const ProductsService = require('../services/service.product');

const router = express.Router();
const service = new ProductsService();

router.get('/', (req, res, next) => {
    try {
        const products = service.findAll();
        console.log(products);
        res.status(201).json(products)
    } catch (error) {
        next(error);
    }
})

module.exports = router;