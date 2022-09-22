"use strict";
exports.__esModule = true;
var express = require('express');
var bodyParser = require('body-parser');
var cookieParser = require('cookie-parser');
var app = express();
var port = 3000;
app.get('/', function (req, res) {
    res.send('Hello World!');
});
app.listen(port, function () {
    console.log("Example app listening at http://localhost:".concat(port));
});
// console.log(app);
// console.log(createHash);
// let hash = createHash('sha256');
// console.log(hash.update("123123").digest('hex'));
