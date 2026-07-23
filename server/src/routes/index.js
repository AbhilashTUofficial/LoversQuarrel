import { Router } from "express";
import authRoutes from "../modules/auth/auth.routes.js";
import gameRoutes from "../modules/game/game.routes.js";
import aiRoutes from "../modules/ai/ai.routes.js";

const router = new Router();

router.use("/auth", authRoutes);
router.use("/game", gameRoutes);
router.use("/ai", aiRoutes);

export default router;
