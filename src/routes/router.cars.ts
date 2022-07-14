import { Router } from "express";
const router = Router();

import { CarRouteController } from "../controller/controller.cars";

router.get("/", CarRouteController.carsController);
router.get("/:type", CarRouteController.carTypeController);
router.get("/:type/:id", CarRouteController.carController);

export default router;
