const http = require('http');
const server = http.createServer((req, res) => {
   res.write('Hello there World');
   res.end();
   
});
