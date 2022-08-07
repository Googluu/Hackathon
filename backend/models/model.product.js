// const { DataTypes, sequelize } = require('sequelize')
// const { DataTypes } = require('sequelize');
// const Sequelize = require('sequelize');

module.exports = (DataTypes , sequelize) => {
const productSchema = sequelize.define('app_product_class', {
    id: {
        type: DataTypes.INTEGER,
        required: true,
        primaryKey: true,
        autoIncrement: true,
    },
    type: {
        type: DataTypes.STRING,
        required: true,
    },
    title: {
        type: DataTypes.STRING,
        required: true,
    },
    description: {
        type: DataTypes.TEXT,
        required: true,
    },
    price: {
        type: DataTypes.DECIMAL,
        required: true,
    },
    measure_units: {
        type: DataTypes.STRING,
        default: null
    },
    measure_type: {
        type: DataTypes.STRING,
        default: null
    },
    units_quantity: {
        type: DataTypes.INTEGER,
        required: true,
    },
    handling_recommendations: {
        type: DataTypes.TEXT,
        required: true,
    },
    image: {
        type: DataTypes.STRING,
        required: true,
    },
    price_history: {
        type: DataTypes.JSONB,
    },
    custom_id: {
        type: DataTypes.STRING,
    },
    app_product_classpkey: {
        type: DataTypes.INTEGER,
    },
    app_product_customaclass_id_key: {
        type: DataTypes.UUID,
    }
});
return productSchema;
}
