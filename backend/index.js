const express = require('express');
const app = express();
const routerApi = require('./controllers/index');

const { config } = require('../config')

// db
const connectionPostgress = require('./db/db')
connectionPostgress(config.db_url);

// middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// routes
routerApi();

app.get('/', (req, res) => {
    res.send('Welcome')
})

app.listen(3000)
console.log('listening on port 3000');