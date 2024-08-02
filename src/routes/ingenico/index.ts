import express from "express";
import getRoutes from "./get";

const router = express.Router();

router.use(getRoutes);

export default router;
