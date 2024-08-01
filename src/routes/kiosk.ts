import express, { Request, Response } from 'express';
const router = express.Router();

// Define a route for /api/Kiosk/is-internet-active
router.get('/is-internet-active', (req: Request, res: Response) => {
    res.json(true); // Respond with true
});

// Define a route for /api/Kiosk/is-service-active
router.get('/is-service-active', (req: Request, res: Response) => {
    res.json(true); // Respond with true
});

export default router;