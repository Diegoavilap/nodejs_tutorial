const http = require('http');
const fs = require('fs');
const server = http.createServer((req, res)=>{
    const readStream = fs.createReadStream('./static/example.json');
    // html --> text/html
    //Image --> image/png
    //Json --> application/json
    res.writeHead(200, {'Content-type': 'application/json'});
    readStream.pipe(res);
}).listen('3000');