// Main application file
const express = require('express');
const app = express();
const healthcheckRouter = require('./routes/healthcheck');

app.use('/api', healthcheckRouter);

const port = 3000;
app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});