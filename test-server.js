const http = require('http');

const port = process.env.PORT || 8080;
const host = '0.0.0.0';

const server = http.createServer((req, res) => {
    console.log(`${new Date().toISOString()} - ${req.method} ${req.url}`);

    if (req.url === '/health') {
        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({
            status: 'ok',
            timestamp: new Date().toISOString(),
            port: port,
            env: process.env.NODE_ENV || 'not set'
        }));
    } else {
        res.writeHead(200, { 'Content-Type': 'text/plain' });
        res.end('Tharara CMS will be here soon! Port: ' + port);
    }
});

server.listen(port, host, () => {
    console.log(`Server running at http://${host}:${port}/`);
});
