const http = require('http');
const server = http.createServer((req, res) => {
 if (req.url === '/') {
   res.write('Hello there World');
   res.end();
 }  
});
