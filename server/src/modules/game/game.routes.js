import { Router } from "express";
import gameController from "./game.controller.js";

const router = Router();

router.post("/setInitialArgument", gameController.setInitialArgument);
router.post("/setTraits", gameController.setTraits);
router.post("/addAllGameSettings", gameController.addAllGameSettings);
router.post("/appendArgument", gameController.appendArgument);

export default router;