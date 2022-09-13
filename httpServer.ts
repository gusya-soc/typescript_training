const http = require('http');

console.log(http);

const server = http.createServer((req, res) => {
    //这里是按关键字去req里匹配
    const { headers,url, method } = req;
    
    //所有的请求内容
    // console.log(req);

    // console.log(url, method);
    let body = [];
    req.on('error', (err) => {
        console.error(err);
    }).on('data', (chunk) => {
        body.push(chunk);
    }).on('end', () => {
        let new_body = Buffer.concat(body).toString();
        console.log(new_body);
        res.end(`method:${method}\nresponse:',${new_body}`);
    });
}).listen(8080);