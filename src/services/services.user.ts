import { users } from "../data/data.user";

export class UserService {
  public static getAll() {
    return { results: users };
  }

  public static findUser(user_id: number) {
    return users.find((item) => item.id === user_id);
  }
}
