const productModel = require('../models/model.product.js')
const sequelize = require('sequelize');

async function allProducts(){
    const products = await productModel.findAll();
    return products;
}

module.exports = {allProducts};