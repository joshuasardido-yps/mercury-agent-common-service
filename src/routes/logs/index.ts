import express from "express";
import postRoutes from "./post";

const router = express.Router();

router.use(postRoutes);

export default router;
