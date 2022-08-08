const { config } = require('../../config');
const Sequelize = require("sequelize");


const sequelize = new Sequelize(config.url,
  {
      dialect: 'postgres',
      native: true, 
      logging: false,
      protocol: 'postgres',
      ssl: {
        rejectUnauthorized: false 
      },
      dialectOptions: {
        ssl: false,
        native:true
      },
  });

module.exports= { sequelize };