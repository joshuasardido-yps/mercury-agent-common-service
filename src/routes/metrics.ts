import express, { Request, Response } from 'express';
import { DeviceStatusRequest, UiEventRequest, AddMetricRequest } from '../interfaces/metrics';
const router = express.Router();

router.post('/device-status', (req: Request<{}, {}, DeviceStatusRequest>, res: Response) => {
    const { metricName, value, status } = req.body;

    if (metricName && value && status) {
        res.status(200).json({ message: 'Device status received successfully' });
    } else {
        res.status(400).json({ error: 'Invalid payload' });
    }
});

router.post('/ui-event', (req: Request<{}, {}, UiEventRequest>, res: Response) => {
    const { name, value } = req.body;

    if (name && value) {
        res.status(200).json({ message: 'UI event received successfully' });
    } else {
        res.status(400).json({ error: 'Invalid payload' });
    }
});

router.post('/session/add-metric/:dataType', (req: Request<{ dataType: string }, {}, AddMetricRequest>, res: Response) => {
    const { key } = req.body;
    const { dataType } = req.params;

    if (key) {
        res.status(200).json({ message: 'Metric added successfully' });
    } else {
        res.status(400).json({ error: 'Invalid payload' });
    }
});

export default router;