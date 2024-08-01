import express, { Request, Response } from 'express';
const router = express.Router();

// Define a route for /api/ingenico
router.get('/', (req: Request, res: Response) => {
    res.json(true); // Respond with true
});

export default router;