const express = require('express');
const productService = require('../services/service.product.js');
const router = express.Router();


router.post('/', async (req, res) => {
    const newProduct= await productService.addProduct(req.body);
    res.send({newProduct});
})

router.get('/', async (req, res) => {
    const products = await productService.allProducts();
    res.status(201).json(products)
})

router.get('/:id', async (req, res) => {
    const productFound= await productService.findProduct(req.params.id);
    res.send({productFound});
})

router.delete('/:id', async (req, res) => {
    const deletedProduct= await productService.deleteProduct(req.params.id);
    res.send({deletedProduct});
})

router.patch('/:id', async (req, res) => {
    const updatedProduct= await productService.updateProduct(req.params.id, req.body);
    res.send({updatedProduct});
})



module.exports = router;