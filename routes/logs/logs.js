const express = require('express');
const router = express.Router();

// Define a route for /api/logs
router.post('/Logs', (req, res) => {
    // Extract the payload from the request body
    const { Message, StackFrame, Type } = req.body;
    console.log('/api/Logs', req.body);

    if (Message && StackFrame && Type) {
        // Send a response with status code 200
        res.status(200).json({ message: 'Device status received successfully' });
    } else {
        // If validation fails, send a 400 Bad Request response
        res.status(400).json({ error: 'Invalid payload' });
    }
});


module.exports = router;