const http = require('http');
const tanggal = require('./tanggal');

const server = http.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.write('Hello, World!\n');
    res.end(tanggal.MyDateTime());
});

server.listen(3000, () => {
    console.log('Server running at http://localhost:3000/');
});