import { Router } from "express";
const router = Router();

import {
  UserRouteController,
  CarRouteController,
} from "../controller/controller";

router.get("/user", UserRouteController.usersController);
router.get("/user/:id", UserRouteController.userController);

router.get("/cars", CarRouteController.carsController);
router.get("/cars/:type", CarRouteController.carTypeController);
router.get("/cars/:type/:id", CarRouteController.carController);

export default router;
