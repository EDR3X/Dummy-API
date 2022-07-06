import { Request, Response } from "express";
import { users } from "../data/usersData";
import { user_find } from "../services/services.user";
import { CarsService } from "../services/services.cars";

const usersController = (_req: Request, res: Response) => {
  res.status(200).json({ results: users });
};

const userController = (req: Request, res: Response) => {
  const id: number = parseInt(req.params.id);

  user_find(id, res);
};

const carsController = (_req: Request, res: Response) => {
  res.status(200).json(CarsService.getAll);
};

const carTypeController = (req: Request, res: Response) => {
  const type: string = req.params.type;

  try {
    if (type === "super") {
      res.status(200).json(CarsService.getSupers);
    } else if (type === "sports") {
      res.status(200).json(CarsService.getSports);
    } else {
      res.status(404).json({ message: "Car type not found" });
    }
  } catch (e: any) {
    res.status(500).json({ error: e.message });
  }
};

const carController = (req: Request, res: Response) => {
  const type: string = req.params.type;
  const type_id: number = parseInt(req.params.id);

  try {
    if (type && type_id && !isNaN(type_id)) {
      CarsService.carFind(type, type_id);
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
