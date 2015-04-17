// We need to use the http library. So we make it accessible to app.js by requiring it through the variable http
var http = require('http');

// Returns a server object 
// Pass in an anonymous function that handles the request/response
var server = http.createServer(function(request, response) {
  response.writeHead(200, {'Content-Type': 'text/plain'});
  response.end('Hello World!\n');
});

// make server listen to port 8080
server.listen(8080);

console.log('Server running on port 8080.');
