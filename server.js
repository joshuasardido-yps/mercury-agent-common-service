const express = require('express');
const cors = require('cors');
const app = express();
const PORT = 5050;

// Import routes
const metricsRoutes = require('./routes/metrics/metrics');
const kioskRoutes = require('./routes/kiosk/kiosk');
const ingenicoRoutes = require('./routes/ingenico/ingenico');
const logsRoutes = require('./routes/logs/logs');

// Use the cors middleware to allow all origins
app.use(cors());

// Use express.json() middleware to parse JSON payloads
app.use(express.json());

// Use imported routes with path prefixes
app.use('/api/Metrics', metricsRoutes);
app.use('/api/Kiosk', kioskRoutes);
app.use('/api', ingenicoRoutes);
app.use('/api', logsRoutes);


// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});