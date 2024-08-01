const express = require('express');
const router = express.Router();

// Define a route for /api/Kiosk/is-internet-active
router.get('/is-internet-active', (req, res) => {
    res.json(true); // Respond with true
});

// Define a route for /api/Kiosk/is-service-active
router.get('/is-service-active', (req, res) => {
    res.json(true); // Respond with true
});

module.exports = router;