var os = require('os');
var http = require('http');

var handler = function (request, response) {
  console.log("Received request from " + request.connection.remoteAddress);

  response.writeHead(200);
  response.end("You've hit " + os.hostname() + "\n");
}

console.log("Simple Http Server starting...");

var www = http.createServer(handler);
www.listen(8080);