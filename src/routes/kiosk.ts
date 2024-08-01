import express, { Request, Response } from 'express';
const router = express.Router();

router.get('/is-internet-active', (req: Request, res: Response) => {
    res.json(true);
});

router.get('/is-service-active', (req: Request, res: Response) => {
    res.json(true);
});

export default router;