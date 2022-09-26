import { rejects } from "assert";
import {createHmac} from "crypto";
import {connection} from "./connectMysql";

const express = require('express');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const app = express();
const port = 3000;

function checkLogin(username:string, password:string) {
        return new Promise((resolve, reject) => {
        connection.query(`SELECT * FROM Users WHERE User_name = '${username}'`, (err, rows, fields) => {
            if (err) {
                reject(err);
            } else {
                if (rows.length === 0) {
                    reject(err);
                } else {
                    let hmac = createHmac('sha256',rows[0].salt.toString());
                    if (rows[0].User_password === hmac.update(password).digest('hex')) {
                        resolve(rows[0]);
                    } else {
                        reject();
                    }
                }
            }
        });
    });
}
function register(username:string, password:string) {
    let salt:string = Math.floor(Math.random() * 100000).toString();
    // console.log(salt);
    let hmac = createHmac('sha256',salt);
    return new Promise((resolve, reject) => {
        connection.query(`INSERT INTO Users (User_name, User_password, salt) VALUES ('${username}', '${hmac.update(password).digest('hex')}', '${salt}')`, (err, rows, fields) => {
            if (err) {
                reject(err);
            } else {
                resolve(rows);
            }
        });
    })
}

function createToken():string{
    let x:number = Math.floor(Math.random() * 1000000);
    let hmac = createHmac('sha256',x.toString());
    return hmac.update((x*Math.floor(Math.random() * 1000000)).toString()).digest('hex');
}

function isLogin(req,res,next){
    // not tested yet
    if(req.cookies.token){
        console.log(req.cookies.token);
        next()
    }else{
        res.redirect('/login');
    }
}

app.use(cookieParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true })); 
app.post("/login", (req, res) => {
    let username:string = req.body.username;
    let password:string = req.body.password;
    checkLogin(username, password).then((result) => {
        // res.send("login success");
        // console.log(result);
        // res.cookie("username", username);

        res.json(
            {
                "response":{
                    "success":true,
                    "error":null,
                    "result":{
                        "token":createToken()
                    }
                }
            }
        )
    }).catch((err) => {
        // res.send("authentication failed");
        res.json(
            {
                "response":{
                    "success":false,
                    "error":{
                        "status":500,
                        "message":"authentication failed"
                    },
                    "result":null
                }
            }
        )
    });
});


app.post("/register", (req, res) => {
        let username:string = req.body.username;
        let password:string = req.body.password;
        register(username, password).then((result) => {
            // res.send(`${username} register successed`);
            // console.log(result);
            res.json(
                {
                    "response":{
                        "success":true,
                        "error":null,
                        "result":null
                    }
                }
            )
        }).catch((err) => {
            // res.send("register failed");
            // console.log(err);
            res.json(
                {
                    "response":{
                        "success":false,
                        "error":{
                            "status":500,
                            "message":"register failed"
                        },
                        "result":null
                    }
                }
            )
        });
});


app.get('/',isLogin,(req, res) => {
    res.send(`Hello World!\n${req.cookies.token}`);
});

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});