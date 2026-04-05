// Healthcheck endpoint to verify server status
const express = require('express');
const router = express.Router();

router.get('/healthcheck', (req, res) => {
  res.status(200).send({ status: 'OK' });
});

module.exports = router;