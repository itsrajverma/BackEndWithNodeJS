const http = require('http');
const host = "127.0.0.1";
const port = 5000;

http.createServer((req, res) => {
    res.writeHead(200, { "Content-Type": "text/plain" });
    res.end("Hello World");
}).listen(port, host, () => {
    console.log(`Server Running On http://${host}:${port}`);
});