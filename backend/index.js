const express = require('express');
const app = express();

// middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// routes
app.use(require('./routes/index'));

app.get('/', (req, res) => {
    res.send('Welcome')
})

app.listen(3000)
console.log('listening on port 3000');