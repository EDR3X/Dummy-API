import { Request, Response } from "express";
import { users } from "../data/usersData";
import { super_cars, sports_cars } from "../data/carsData";

const userController = (req: Request, res: Response) => {
  const id: number = parseInt(req.params.id);

  if (id && !isNaN(id)) {
    res.json(users[id - 1]);
  }

  res.status(200).json({ results: users });
};

const carsController = (_req: Request, res: Response) => {
  res.status(200).json({ super: super_cars, sports: sports_cars });
};

const carTypeController = (req: Request, res: Response) => {
  const type: string = req.params.type;

  try {
    if (type === "super") {
      res.status(200).json({ super: super_cars });
    } else if (type === "sports") {
      res.status(200).json({ sports: sports_cars });
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
      if (type === "super") {
        const supercars = super_cars.find((item) => item.id === type_id);

        if (supercars) {
          res.json(supercars);
        } else {
          res.status(404).json({ message: "Car not found" });
        }
      } else if (type === "sports") {
        const sportscars = sports_cars.find((item) => item.id === type_id);

        if (sportscars) {
          res.json(sportscars);
        } else {
          res.status(404).json({ message: "Car not found" });
        }
      } else {
        res.status(404).json({ message: "Car type not found" });
      }
    }
  } catch (e: any) {
    res.status(500).json({ error: e.message });
  }
};

export default {
  userController,
  carController,
  carsController,
  carTypeController,
};
