import { Router } from "express";
import aiController from "./ai.controller.js";

const router = Router();

router.post("/reformatArgument", aiController.reformatArgument);
router.post("/generateSystemChat", aiController.generateSystemChat);

export default router;
