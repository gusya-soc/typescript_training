import {createHmac} from "crypto";
import {connection} from "./connectMysql";

const express = require('express');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const app = express();
const port = 3000;

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

function checkLogin(username:string, password:string):boolean {
        let result:boolean;
        connection.query(`SELECT * FROM Users WHERE User_name = '${username}'`, (err, rows, fields) => {
            if (err) {
                console.log(err);
                result = false;
            } else {
                if (rows.length === 0) {
                    result = false;
                } else {
                    let hmac = createHmac('sha256',rows[0].salt.toString());
                    if (rows[0].User_password === hmac.update(password).digest('hex')) {
                        result = true;
                    } else {
                        result = false;
                    }
                }
            }
        });
        return result;
    }

app.use(bodyParser.urlencoded({ extended: true })); 
app.post("/login", (req, res) => {
    let username:string = req.body.username;
    let password:string = req.body.password;
    if (checkLogin(username, password)) {
        res.send("Login successful");
    }else{
        res.send("Login failed");
    }

});

function register(username:string, password:string):boolean {
    let result:boolean;
    let salt:string = Math.floor(Math.random() * 100000).toString();
    console.log(salt);
    let hmac = createHmac('sha256',salt);
    return connection.query(`INSERT INTO Users (User_name, User_password, submission_date, salt) VALUES ('${username}', '${hmac.update(password).digest('hex')}', now(), '${salt}')`, (err, rows, fields) => {
        if (err) {
            console.log(err);
            result = false;
        } else {
            // console.log(rows);
            result = true;
            console.log(`the result:${result}`)
        }
        return result;
    });
}
app.post("/register", (req, res) => {
        let username:string = req.body.username;
        let password:string = req.body.password;
        if (register(username, password)) {
            res.send("Register successful");
        }else{
            res.send("Register failed");
        }
    });
app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});