const express = require('express');
const path = require('path');
require('dotenv').config();

const app = express()
const port = process.env.PORT || 8088;
const hostname = process.env.HOST_NAME;

app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'ejs')

app.get('/', (req, res) => {
    res.send('Hello World! & nodemon update')
})

app.get('/abc', (req, res) => {
    res.send('check ABC')
})

app.get('/hoidanit', (req, res) => {
    // res.send('<h1>hoi dan it voi eric</h1>')
    res.render('sample.ejs')
})

app.listen(port,hostname, () => {
    console.log(`Example app listening on port ${port}`)
})