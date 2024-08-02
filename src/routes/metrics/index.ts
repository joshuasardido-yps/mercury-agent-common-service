import express from "express";
import getRoutes from "./get";
import postRoutes from "./post";

const router = express.Router();

router.use(getRoutes);
router.use(postRoutes);

export default router;
