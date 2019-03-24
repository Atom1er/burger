var mysql = require("mysql");

var connection = mysql.createConnection({
    host: 'localhost',
    database: 'burgers_db',
    user: 'root',
    password: 'Elvir@93'
});

connection.connect();

module.exports = connection;