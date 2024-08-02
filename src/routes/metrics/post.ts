import express, { Request, Response } from "express";
const router = express.Router();

router.post("/device-status", (req: Request, res: Response) => {
    res.status(200).json();
});

router.post("/ui-event", (req: Request, res: Response) => {
    res.status(200).json();
});

router.post("/session/add-metric/:dataType", (req: Request, res: Response) => {
    res.status(200).json();
});

export default router;
