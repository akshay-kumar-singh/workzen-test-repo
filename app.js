// Import required modules
const express = require('express');
const app = express();
const healthRoute = require('./routes/healthRoute');

// Use the health route
app.use('/api', healthRoute);

// Start the server
const port = 3000;
app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});