const { config } = require('../../config');
const Sequelize = require('sequelize');


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

module.exports= { sequelize }

// const { Client } = require('pg');

// const { config } = require('../../config');

// const connectionPostgress = async () => {
//   const client = new Client({
//     user: config.user,
//     host: config.host,
//     database: config.db_url,
//     password: config.password,
//     port: config.port,
//     ssl: {
//       rejectUnauthorized: false 
//     }
//   });

//   await client.connect();

//   const res = await client.query("SELECT * FROM public.app_product_class");

//   const result = res.rows;

//   await client.end();

//   return result;
// };

// module.exports = {
//   connectionPostgress
// };