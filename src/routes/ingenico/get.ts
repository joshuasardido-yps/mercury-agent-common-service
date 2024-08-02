import express, { Request, Response } from 'express';
const router = express.Router();

router.get('/', (req: Request, res: Response) => {
    res.status(200).json(true);
});

router.get('/pay/:amount/:reference', (req: Request, res: Response) => {
    res.status(200).json(0);
});

export default router;