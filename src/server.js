require('dotenv').config();
const express = require('express');
const configViewEngine = require('./config/viewEngine');
const webRoutes = require('./routes/web');
const mysql = require('mysql2');

const app = express()
const port = process.env.PORT || 8088;
const hostname = process.env.HOST_NAME;

// config template engine
configViewEngine(app)

// khai báo Route
app.use('/', webRoutes);

// test connection
// Create the connection to database
const connection = mysql.createConnection({
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: 'Tientolk050304@',
    database: 'hoidanit',
});

// A simple SELECT query
connection.query(
    'select * from users',
    function (err, results, fields) {
      console.log(">> results= ", results); // results contains rows returned by server
      console.log(">> fields= ",fields); // fields contains extra meta data about results, if available
    }
);
app.listen(port,hostname, () => {
    console.log(`Example app listening on port ${port}`)
})