const http = require('http');
const url = require('url');
const fs = require('fs');
const path = require('path');
const host = "127.0.0.1";
const port = 5000;
const mineTypes = {
    html: "text/html",
    css: "text/css",
    js: "text/javascript",
    png: "image/png",
    jpeg: "image/jpeg",
    jpg: "image/jpg"
}

http.createServer((req, res) => {
    var myuri = url.parse(req.url).pathname;
    var filename = path.join(process.cwd(), unescape(myuri));
    console.log('file is :' + filename);
    var loadFile;

})