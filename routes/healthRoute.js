// Health Route to handle health status endpoint
const express = require('express');
const router = express.Router();
const healthController = require('../controllers/healthController');

// Define the route for the health status endpoint
router.get('/health', healthController.getHealthStatus);

module.exports = router;