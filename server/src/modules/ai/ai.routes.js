import { Router } from "express";
import aiController from "./ai.controller.js";

const router = Router();

router.post("/getReformattedArgument", aiController.getReformattedArgument);
router.post("/generateSystemChat", aiController.generateSystemChat);
router.post("/getInitialTraits", aiController.getInitialTraits);

export default router;
