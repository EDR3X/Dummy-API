import { Router } from "express";
import controller from "../controller/userController";
const router = Router();

router.get("/", controller.mainController);

export default router;
