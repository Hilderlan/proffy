import express from 'express';

const app = express();

app.use(express.json());

app.get('/', (request, response) => {
  console.log('Hello world!');
  response.send('LOL');
})

app.listen(5000, () => {
  console.log('Server started!');
})