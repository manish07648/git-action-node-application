import express from 'express';

const app = express();

app.get('/', (req, res) => {
  res.send('Hello Manish 🚀 changing kya automate hua ha ');
});

app.listen(3000, () => {
  console.log('Server running on port 3000');
});