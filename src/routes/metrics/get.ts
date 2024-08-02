import express, { Request, Response } from "express";
const router = express.Router();

router.get("/session/start", (req: Request, res: Response) => {
    res.status(200).json();
});

router.get("/session/end/:isCustomerSession", (req: Request, res: Response) => {
    const { isCustomerSession } = req.params;

    const isSessionsNotConvertedToRaiseAlertExceeded = false;
    const shouldRestartKiosk = isCustomerSession === "true";

    res.status(200).json({
        isSessionsNotConvertedToRaiseAlertExceeded,
        shouldRestartKiosk,
    });
});

export default router;
