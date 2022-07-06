import { Response } from "express";

import { users } from "../data/usersData";

export class UserService {
  public static getAll() {
    return { results: users };
  }

  public static findUser(user_id: number) {
    return users.find((item) => item.id === user_id);
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
