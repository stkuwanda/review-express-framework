// create and serve an express server using CJS modules

const express = require('express');

const app = express();

app.get('/', (req, res) => {
  res.end('Hello world!');
});

const server = app.listen(8081, function () {
  var hostname = server.address().address;
  var port = server.address().port;
  console.log(`Server is listening at http://${hostname}:${port}`);
});