import express, { Request, Response } from "express";
const router = express.Router();

// Define the type for the request body
interface LogRequest {
    Message: string;
    StackFrame: string;
    Type: string;
}

// Define a route for /api/logs
router.post("/Logs", (req: Request<{}, {}, LogRequest>, res: Response) => {
    const { Message, StackFrame, Type } = req.body;
    console.log("/api/Logs", req.body);

    if (Message && StackFrame && Type) {
        res.status(200).json({ message: "Log received successfully" });
    } else {
        res.status(400).json({ error: "Invalid payload" });
    }
});

export default router;
