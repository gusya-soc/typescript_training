const request = require('request');
console.log(request);
let options = {
    url: 'http://localhost:8080',
    method: 'POST',
    form: { "name": "zhangsan", "age": 18 }
};
request(options, function (error, response, body) {
    console.log(body);
});