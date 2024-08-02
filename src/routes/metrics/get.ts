import express, { Request, Response } from "express";
const router = express.Router();

router.get("/session/start", (req: Request, res: Response) => {
    res.status(200).json();
});

router.get("/session/end/:isCustomerSession", (req: Request, res: Response) => {
    res.status(200).json({
        isSessionsNotConvertedToRaiseAlertExceeded: false,
        shouldRestartKiosk: false,
      });
});

export default router;
