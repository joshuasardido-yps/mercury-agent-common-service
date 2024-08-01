const express = require('express');
const router = express.Router();

// Define a route for /api/ingenico
router.get('/ingenico', (req, res) => {
    res.json(true); // Respond with true
});

module.exports = router;