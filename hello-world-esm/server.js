// create and serve an express server using ESM modules

import express from 'express';

const app = express();

app.get('/', (req, res) => {
  res.send('Hello world from express!');
});

app.listen(8080, () => {
  console.log(`Hello World app listening on port 8080...`)
});
