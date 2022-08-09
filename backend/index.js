const express = require('express');
const app = express();
const routerApi = require('./controllers/index');

// middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// routes
routerApi(app)

app.listen(3000)
console.log('listening on port 3000');