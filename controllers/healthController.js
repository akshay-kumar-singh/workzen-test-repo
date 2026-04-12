// Health Controller to handle health status endpoint
const healthController = {
  // Method to get health status
  getHealthStatus: (req, res) => {
    try {
      // Return a successful response with a health status message
      res.status(200).json({ message: 'Service is healthy' });
    } catch (error) {
      // Handle any errors and return a server error response
      res.status(500).json({ message: 'Failed to retrieve health status' });
    }
  }
};

module.exports = healthController;