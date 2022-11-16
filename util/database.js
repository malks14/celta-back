
const mysql = require('mysql2');

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    database: 'celtadb',
    password: 'slipknot1'
});

module.exports = connection.promise()


