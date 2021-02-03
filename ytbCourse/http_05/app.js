let http = require('http');

http.createServer((req, res) => {
    res.end("Opa")
}).listen(3000);

console.log("Salve");