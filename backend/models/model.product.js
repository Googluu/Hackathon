const Sequelize = require("sequelize");
const { sequelize } = require('../db/db.js');

const productModel = sequelize.define("app_product_class",{
    id: {
        type: Sequelize.INTEGER,
        required: true,
        primaryKey: true,
        autoIncrement: true,
    },
    type: {
        type: Sequelize.TEXT,
        required: true,
    },
    title: {
        type: Sequelize.TEXT,
        required: true,
    },
    description: {
        type: Sequelize.TEXT,
        required: true,
    },
    price: {
        type: Sequelize.NUMBER,
        required: true,
    },
    measure_units: {
        type: Sequelize.TEXT,
        default: null
    },
    measure_type: {
        type: Sequelize.TEXT,
        default: null
    },
    units_quantity: {
        type: Sequelize.INTEGER,
        required: true,
    },
    packaging_recommendations: {
        type: Sequelize.TEXT,
        required: true,
    },
    handling_recommendations: {
        type: Sequelize.TEXT,
        required: true,
    },
    image: {
        type: Sequelize.TEXT,
        required: true,
    },
    deleted: {
        type: Sequelize.BOOLEAN,
        required: true,
    },
    price_history: {
        type: Sequelize.TEXT,
    },
    custom_id: {
        type: Sequelize.TEXT,
    },
},
{
    freezeTableName: false,
    timestamps: false,
    paranoid: true,
    tableName: 'app_product_class'
})

module.exports=productModel;