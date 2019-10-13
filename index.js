//https://www.npmjs.com/package/express
//https://expressjs.com/en/4x/api.html#req
const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('Hello World');
});

app.get('/api/courses', (req, res) => {
     res.send([1, 2, 3]);

});

app.get('/api/courses/:id', (req,res) => {
     res.send(req.params.id);
});

app.get('/api/posts/:year/:month', (req, res) => {
  res.send(req.params); 
});
app.listen(3000, () => console.log('Listening on port 3000...'));
