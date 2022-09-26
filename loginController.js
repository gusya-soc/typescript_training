"use strict";
exports.__esModule = true;
var crypto_1 = require("crypto");
var connectMysql_1 = require("./connectMysql");
var express = require('express');
var bodyParser = require('body-parser');
var cookieParser = require('cookie-parser');
var app = express();
var port = 3000;
function checkLogin(username, password) {
    return new Promise(function (resolve, reject) {
        connectMysql_1.connection.query("SELECT * FROM Users WHERE User_name = '".concat(username, "'"), function (err, rows, fields) {
            if (err) {
                reject(err);
            }
            else {
                if (rows.length === 0) {
                    reject(err);
                }
                else {
                    var hmac = (0, crypto_1.createHmac)('sha256', rows[0].salt.toString());
                    if (rows[0].User_password === hmac.update(password).digest('hex')) {
                        resolve(rows[0]);
                    }
                    else {
                        reject();
                    }
                }
            }
        });
    });
}
function register(username, password) {
    var salt = Math.floor(Math.random() * 100000).toString();
    // console.log(salt);
    var hmac = (0, crypto_1.createHmac)('sha256', salt);
    return new Promise(function (resolve, reject) {
        connectMysql_1.connection.query("INSERT INTO Users (User_name, User_password, salt) VALUES ('".concat(username, "', '").concat(hmac.update(password).digest('hex'), "', '").concat(salt, "')"), function (err, rows, fields) {
            if (err) {
                reject(err);
            }
            else {
                resolve(rows);
            }
        });
    });
}
function createToken() {
    var x = Math.floor(Math.random() * 1000000);
    var hmac = (0, crypto_1.createHmac)('sha256', x.toString());
    return hmac.update((x * Math.floor(Math.random() * 1000000)).toString()).digest('hex');
}
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.post("/login", function (req, res) {
    var username = req.body.username;
    var password = req.body.password;
    checkLogin(username, password).then(function (result) {
        // res.send("login success");
        // console.log(result);
        // res.cookie("username", username);
        res.json({
            "response": {
                "success": true,
                "error": null,
                "result": {
                    "token": createToken()
                }
            }
        });
    })["catch"](function (err) {
        // res.send("authentication failed");
        res.json({
            "response": {
                "success": false,
                "error": {
                    "status": 500,
                    "message": "authentication failed"
                },
                "result": null
            }
        });
    });
});
app.post("/register", function (req, res) {
    var username = req.body.username;
    var password = req.body.password;
    register(username, password).then(function (result) {
        // res.send(`${username} register successed`);
        // console.log(result);
        res.json({
            "response": {
                "success": true,
                "error": null,
                "result": null
            }
        });
    })["catch"](function (err) {
        // res.send("register failed");
        // console.log(err);
        res.json({
            "response": {
                "success": false,
                "error": {
                    "status": 500,
                    "message": "register failed"
                },
                "result": null
            }
        });
    });
});
app.listen(port, function () {
    console.log("Example app listening at http://localhost:".concat(port));
});
