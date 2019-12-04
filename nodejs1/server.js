const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;
const delayMS = 100;

let countRequest = 0;

const server = http.createServer((req, res) => {
    setTimeout(function() {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/plain');
        res.end(`${++countRequest}`);
    }, delayMS);
    
});

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});
