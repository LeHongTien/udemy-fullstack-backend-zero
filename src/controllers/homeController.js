const connection = require('../config/database');

const getHomepage = (req, res) => {
    let users = [];

    connection.query(
        'select * from users',
        function (err, results, fields) {
            users = results;
            console.log(">> results= ", results); // results contains rows returned by server
            // console.log(">>> check users: ", users);
            res.send(JSON.stringify(users))
        }
    );
    
}

const getABC = (req, res) => {
    res.send('check ABC');
}

const getHoiDanIT = (req, res) => {
    res.render('sample.ejs')
}

module.exports = {
    getHomepage,
    getABC,
    getHoiDanIT
}