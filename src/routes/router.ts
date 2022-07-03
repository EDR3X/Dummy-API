import { Router } from "express";
import controller from "../controller/mainController";
const router = Router();

router.get("/", controller.mainController);

export default router;
