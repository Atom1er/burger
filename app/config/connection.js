var mysql = require("mysql");

var connection = mysql.createConnection({
    host: 'ipobfcpvprjpmdo9.cbetxkdyhwsb.us-east-1.rds.amazonaws.com',
    database: 'egpt5wixzhcr236p',
    port: 3306,
    user: 'maemlh2qot70921k',
    password: 'mnbbskio3ltztcfx'
});

connection.connect(function(err, res){
    if (err) {
        console.error("error connecting: " + err.stack);
        return;
      }
      console.log("connected as id " + connection.threadId);
});

module.exports = connection;