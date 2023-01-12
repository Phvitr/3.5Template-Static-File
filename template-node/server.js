const http = require('http');
const fs = require('fs');

let server = http.createServer((req, res) => {
    fs.readFile('./templates/index.html','utf8', (err, str) => {
        if (err) {
            res.writeHead(404, {'Content-Type': 'text/html'});
            return res.end('404 Not Found');
        }
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.write(str);
        return res.end();
    })
});

server.listen(8085, () => {
    console.log('server is running at http://localhost:8085');
});