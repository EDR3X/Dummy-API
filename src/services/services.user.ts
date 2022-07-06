import { Response } from "express";

import { users } from "../data/usersData";

export class UserService {
  public static usersController(_req: Request, res: Response) {
    res.status(200).json({ results: users });
  }
}

export const user_find = (param_id: number, res: Response) => {
  try {
    if (param_id && !isNaN(param_id)) {
      const user = users.find((item) => item.id === param_id);

      if (user) {
        res.status(200).json({ results: user });
      } else {
        res.status(404).json({ message: "User not found" });
      }
    }
  } catch (e: any) {
    res.status(500).json({ error: e.message });
  }
};
