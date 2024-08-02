import express, { Request, Response } from 'express';
const router = express.Router();

router.get('/is-internet-active', (req: Request, res: Response) => {
    res.status(200).json(true);
});

router.get('/is-service-active', (req: Request, res: Response) => {
    res.status(200).json(true);
});

export default router;