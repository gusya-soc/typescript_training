const request = require('request');

console.log(request);

let options = {
    url:'http://localhost:8080',
    method:'POST',
    // data:{"name":"zhangsan","age":18}
    form:{"name":"zhangsan","age":18}
}

request(options,function (error,response,body) {
    console.log(body);})