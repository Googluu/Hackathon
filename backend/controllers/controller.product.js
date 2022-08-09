const express = require('express');
const productService = require('../services/service.product.js');
const router = express.Router();


router.get('/', async (req, res) => {
    const products = await productService.allProducts();
    res.status(201).json(products)
})

module.exports = router;

// const express = require('express');

// const ProductsService = require('../services/service.product');

// const router = express.Router();
// const service = new ProductsService();

// router.get('/', (req, res, next) => {
//     try {
//         const products = service.findAll();
//         console.log(products);
//         res.status(201).json(products)
//     } catch (error) {
//         next(error);
//     }
// })

// module.exports = router;