import express from 'express';
import cors from 'cors';
import ingenico from './routes/ingenico';
import kiosk from './routes/kiosk';
import logs from './routes/logs';
import metrics from './routes/metrics';

const app = express();
const PORT = 5050;

// Use the cors middleware to allow all origins
app.use(cors());

// Use express.json() middleware to parse JSON payloads
app.use(express.json());

// Use imported routes with path prefixes
app.use('/api/ingenico', ingenico);
app.use('/api/Kiosk', kiosk);
app.use('/api/Logs', logs);
app.use('/api/Metrics', metrics);

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});