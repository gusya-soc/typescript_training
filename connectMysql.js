"use strict";
exports.__esModule = true;
exports.connection = void 0;
require('dotenv').config();
var sql = require('mysql2');
var connection = sql.createConnection({
    host: process.env.userhost,
    user: process.env.username,
    password: process.env.userpassword,
    database: 'TYPESCRIPT'
});
exports.connection = connection;
