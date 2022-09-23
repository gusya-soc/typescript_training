"use strict";
exports.__esModule = true;
var crypto_1 = require("crypto");
var connectMysql_1 = require("./connectMysql");
var express = require('express');
var bodyParser = require('body-parser');
var cookieParser = require('cookie-parser');
var app = express();
var port = 3000;
// app.get('/', (req, res) => {
//     res.send('Hello World!');
// });
// app.listen(port, () => {
//     console.log(`Example app listening at http://localhost:${port}`);
// });
// console.log(app);
// console.log(createHash);
// let hash = createHash('sha256');
// console.log(hash.update("123123").digest('hex'));
function checkLogin(username, password) {
    var result;
    connectMysql_1.connection.query("SELECT * FROM Users WHERE User_name = '".concat(username, "'"), function (err, rows, fields) {
        if (err) {
            console.log(err);
            result = false;
        }
        else {
            if (rows.length === 0) {
                result = false;
            }
            else {
                var hmac = (0, crypto_1.createHmac)('sha256', rows[0].salt.toString());
                if (rows[0].User_password === hmac.update(password).digest('hex')) {
                    result = true;
                }
                else {
                    result = false;
                }
            }
        }
    });
    return result;
}
app.use(bodyParser.urlencoded({ extended: true }));
app.post("/login", function (req, res) {
    var username = req.body.username;
    var password = req.body.password;
    if (checkLogin(username, password)) {
        res.send("Login successful");
    }
    else {
        res.send("Login failed");
    }
});
function register(username, password) {
    var result;
    var salt = Math.floor(Math.random() * 100000).toString();
    console.log(salt);
    var hmac = (0, crypto_1.createHmac)('sha256', salt);
    return connectMysql_1.connection.query("INSERT INTO Users (User_name, User_password, submission_date, salt) VALUES ('".concat(username, "', '").concat(hmac.update(password).digest('hex'), "', now(), '").concat(salt, "')"), function (err, rows, fields) {
        if (err) {
            console.log(err);
            result = false;
        }
        else {
            // console.log(rows);
            result = true;
            console.log("the result:".concat(result));
        }
        return result;
    });
}
app.post("/register", function (req, res) {
    var username = req.body.username;
    var password = req.body.password;

    // not running as expected
    // falut register require also return the successful message
    if (register(username, password)) {
        res.send("Register successful");
    }
    else {
        res.send("Register failed");
    }
});
app.listen(port, function () {
    console.log("Example app listening at http://localhost:".concat(port));
});
