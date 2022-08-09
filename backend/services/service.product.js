const productModel = require('../models/model.product.js')
const sequelize = require('sequelize');

async function allProducts(){
    const products = await productModel.findAll();
    return products;
}

async function addProduct(data) {
    const addNewProduct = new productModel({...data});
    return await addNewProduct.save()
} 

async function findProduct(id) {
    const findOneProduct= await productModel.findOne({_id:id})
    return findOneProduct;
} 

async function deleteProduct(id) {
    const deleteOneProduct= await productModel.destroy({ where: { id: id } });
    return deleteOneProduct;
}

async function updateProduct(id, product) {
    const updatedOneProduct= await productModel.update(product,{ where: {id:id}});
    return updatedOneProduct;
}



module.exports={addProduct, allProducts, findProduct, deleteProduct, updateProduct,}
