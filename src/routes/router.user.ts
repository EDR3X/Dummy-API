import { Router } from "express";
const router = Router();

import { UserRouteController } from "../controller/controller.user";

router.get("/", UserRouteController.usersController);
router.get("/:id", UserRouteController.userController);

export default router;
