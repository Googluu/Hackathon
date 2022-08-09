require('dotenv').config();

const config = {
    user: process.env.USER,
    host: process.env.HOST,
    db_url: process.env.DB_URL,
    password: process.env.PASSWORD,
    port: process.env.PORT,
    url: process.env.URL,
}

module.exports = { config };