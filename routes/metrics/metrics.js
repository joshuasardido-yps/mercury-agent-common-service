const express = require('express');
const router = express.Router();

// Define a route for /api/Metrics/device-status
router.post('/device-status', (req, res) => {
    // Extract the payload from the request body
    const { metricName, value, status } = req.body;
    console.log('/api/Metrics/device-status', req.body);

    if (metricName && value && status) {
        // Send a response with status code 200
        res.status(200).json({ message: 'Device status received successfully' });
    } else {
        // If validation fails, send a 400 Bad Request response
        res.status(400).json({ error: 'Invalid payload' });
    }
});

// Define a route for /api/Metrics/ui-event
router.post('/ui-event', (req, res) => {
    // Extract the payload from the request body
    const { name, value } = req.body;
    console.log('/api/Metrics/ui-event', req.body);

    if (name && value) {
        // Send a response with status code 200
        res.status(200).json({ message: 'Device status received successfully' });
    } else {
        // If validation fails, send a 400 Bad Request response
        res.status(400).json({ error: 'Invalid payload' });
    }
});

// Define a route for /api/Metrics/session/add-metric/:dataType
router.post('/session/add-metric/:dataType', (req, res) => {
    const { key } = req.body;
    console.log(`/api/Metrics/session/add-metric/${req.params.dataType}`, req.body);

    if (key) {
        // Send a response with status code 200
        res.status(200).json({ message: 'Device status received successfully' });
    } else {
        // If validation fails, send a 400 Bad Request response
        res.status(400).json({ error: 'Invalid payload' });
    }
});

module.exports = router;