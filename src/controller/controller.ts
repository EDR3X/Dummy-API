import { Request, Response } from "express";
import { UserService } from "../services/services.user";
import { CarsService } from "../services/services.cars";

const usersController = (_req: Request, res: Response) => {
  res.status(200).json(UserService.getAll);
};

const userController = (req: Request, res: Response) => {
  const id: number = parseInt(req.params.id);

  res.send(UserService.findUser(id));
};

const carsController = (_req: Request, res: Response) => {
  res.status(200).json(CarsService.getAll());
};

const carTypeController = (req: Request, res: Response) => {
  const type: string = req.params.type;

  try {
    res.status(200).json(CarsService.getCarType(type));
  } catch (e: any) {
    res.status(500).json({ error: e.message });
  }
};

const carController = (req: Request, res: Response) => {
  const type: string = req.params.type;
  const type_id: number = parseInt(req.params.id);

  try {
    if (type && type_id && !isNaN(type_id)) {
      res.status(200).json(CarsService.carFind(type, type_id));
    }
  } catch (e: any) {
    res.status(500).json({ error: e.message });
  }
};

export default {
  usersController,
  userController,
  carController,
  carsController,
  carTypeController,
};
