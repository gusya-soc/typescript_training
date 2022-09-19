require('dotenv').config();

const sql = require('mysql2');

const connection = sql.createConnection({
    host: process.env.userhost,
    user: process.env.username,
    password: process.env.userpassword,
    database: 'Users'
});

connection.connect((err) => {
    if (err) {
        console.log(err);
    } else {
        console.log('connected');
    }
});

connection.query('SELECT * FROM Users', (err, rows, fields) => {
    if (err) {
        console.log(err);
    } else {
        console.log(rows);
    }
});
