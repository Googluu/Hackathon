const express = require('express');
const productService = require('../services/service.product.js');
const router = express.Router();


router.get('/', async (req, res) => {
    const products = await productService.allProducts();
    res.status(201).json(products)
})

module.exports = router;