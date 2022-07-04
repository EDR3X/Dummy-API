import { Router } from "express";
import controller from "../controller/controller";
const router = Router();

router.get("/user", controller.userController);
router.get("/user/:id", controller.userController);

router.get("/cars", controller.carsController);
router.get("/cars/:type/:id", controller.carController);

export default router;
