import { Request, Response } from "express";
import { UserService } from "../services/services.user";

export class UserRouteController {
  public static usersController = (_req: Request, res: Response) => {
    res.status(200).json(UserService.getAll());
  };

  public static userController = (req: Request, res: Response) => {
    const id: number = parseInt(req.params.id);

    try {
      res.status(200).json(UserService.findUser(id));
    } catch (e: any) {
      res.status(500).json({ error: e.message });
    }
  };
}