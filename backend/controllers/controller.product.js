const { Pool } = require("pg");


const getProducts = async (req, res) => {
    const response = await Pool.query('SELECT * FROM public.app_product_class')
    res.status(200).json(response.rows);
}

module.exports = {
    getProducts,
}