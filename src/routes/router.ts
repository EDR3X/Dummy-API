import { Router } from "express";
import controller from "../controller/controller";
const router = Router();

router.get("/users", controller.userController);
router.get("/cars", controller.carsController);

export default router;
