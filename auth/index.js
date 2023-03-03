const express = require('express');
const app = express();

app.get('/authenticate', (req, res) => {

  const authenticated = (req.headers['x-authenticated'] === 'true');
  console.log(`Received authentication request with permissions set to '${authenticated}'`);

  if (authenticated) {

    return res.status(200).json({
      message: 'Authenticated' // dummy message
    });

  } else {

    return res.status(401).json({
      message: 'Insufficient permissions' // dummy message
    });

  }

});

app.listen(3000, () => {
  console.log('Authentication server listening on port 3000');
});
