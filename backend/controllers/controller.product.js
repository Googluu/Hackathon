const express = require('express');

const ProductsService = require('../services/service.product');

const router = express.Router();
const service = new ProductsService();

router.get('/', async (req, res, next) => {
    try {
        const products = await service.find(req.query);
        res.json(products);
    } catch (error) {
        next(error);
    }
})

module.exports = router;