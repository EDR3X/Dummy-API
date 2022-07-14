import { Request, Response } from "express";
import { CarsService } from "../services/services.cars";

export class CarRouteController {
  public static carsController = (_req: Request, res: Response) => {
    res.status(200).json(CarsService.getAll());
  };

  public static carTypeController = (req: Request, res: Response) => {
    const type: string = req.params.type;

    try {
      res.status(200).json(CarsService.getCarType(type));
    } catch (e: any) {
      res.status(500).json({ error: e.message });
    }
  };

  public static carController = (req: Request, res: Response) => {
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
}
