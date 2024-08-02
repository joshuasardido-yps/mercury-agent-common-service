import express, { Request, Response } from "express";
import { LogRequest } from "../../types/logs";
const router = express.Router();

router.post("/", (req: Request<{}, {}, LogRequest>, res: Response) => {
    const { Message, StackFrame, Type } = req.body;

    if (Message && StackFrame && Type) {
        res.status(200).json({ message: "Log received successfully" });
    } else {
        res.status(400).json({ error: "Invalid payload" });
    }
});

export default router;
