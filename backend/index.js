const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('Hello from backend server!');
});

app.listen(3000, () => {
  console.log('Backend server listening on port 3000');
});
