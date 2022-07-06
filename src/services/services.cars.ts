import { super_cars, sports_cars } from "../data/carsData";

export class CarsService {
  public static getAll() {
    return { super: super_cars, sports: sports_cars };
  }

  public static getSupers() {
    return { super: super_cars };
  }

  public static getSports() {
    return { sports: sports_cars };
  }

  public static carFind(type_name: string, type_id: number) {
    if (type_name === "super") {
      const supercars = super_cars.find((item) => item.id === type_id);

      if (supercars) {
        return supercars;
      } else {
        throw new Error("Car not found");
      }
    }

    if (type_name === "sports") {
      const sportscars = sports_cars.find((item) => item.id === type_id);

      if (sportscars) {
        return sportscars;
      } else {
        throw new Error("Car not found");
      }
    }
  }
}
