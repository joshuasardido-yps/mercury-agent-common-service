import express, { Request, Response } from "express";
import { LogRequest } from "../interfaces/logs";
const router = express.Router();

// Define a route for /api/logs
router.post("/", (req: Request<{}, {}, LogRequest>, res: Response) => {
    const { Message, StackFrame, Type } = req.body;
    console.log("/api/Logs", req.body);

    if (Message && StackFrame && Type) {
        res.status(200).json({ message: "Log received successfully" });
    } else {
        res.status(400).json({ error: "Invalid payload" });
    }
});

export default router;
