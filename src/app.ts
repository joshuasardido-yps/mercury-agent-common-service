import express from 'express';
import cors from 'cors';
import ingenicoRoutes from './routes/ingenico/ingenico';
import kioskRoutes from './routes/kiosk/kiosk';
import logsRoutes from './routes/logs/logs';
import metricsRoutes from './routes/metrics/metrics';

const app = express();
const PORT = 5050;

// Use the cors middleware to allow all origins
app.use(cors());

// Use express.json() middleware to parse JSON payloads
app.use(express.json());

// Use imported routes with path prefixes
app.use('/api/ingenico', ingenicoRoutes);
app.use('/api/Kiosk', kioskRoutes);
app.use('/api/Logs', logsRoutes);
app.use('/api/Metrics', metricsRoutes);

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});