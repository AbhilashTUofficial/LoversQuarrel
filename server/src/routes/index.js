import { Router } from "express";
import authRoutes from "../modules/auth/auth.routes.js";

const router = new Router();

router.use("/auth", authRoutes);
// router.use("/game", require("./game.js"));
// router.use("/game-settings", require("./game-settings.js"));
// router.use("/ai", require("./ai.js"));

export default router;
