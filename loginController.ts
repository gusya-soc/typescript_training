import {createHash} from "crypto";
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

let hash = createHash('sha256');
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
                    if (rows[0].User_password === hash.update(password).digest('hex')) {
                        result = true;
                    } else {
                        result = false;
                    }
                }
            }
        });
        return result;
    }

app.post("/login", (req, res) => {
    let username:string = req.body.username;
    let password:string = req.body.password;
    if (checkLogin(username, password)) {
        res.send("Login successful");
    }else{
        res.send("Login failed");
    }

});

