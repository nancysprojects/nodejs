const http = require('http');
const server = http.createServer();
server.on('connection',(socket) => {
console.log('MyNew connection');
});
server.listen(3000);
console.log("Listening on port 3000');
