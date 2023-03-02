const cors = require('cors')
const express = require('express');
const app = express();

// Without CORS an error would be thrown everytime a request is made to the API!
// TODO: set headers as required per use case!
app.use(cors());

app.get('/', (req, res) => {
  res.send('Hello from backend server!');
});

app.listen(3000, () => {
  console.log('Backend server listening on port 3000');
});
