import { super_cars, sports_cars } from "../data/data.cars";

export class CarsService {
  public static getAll() {
    return { super: super_cars, sports: sports_cars };
  }

  public static getCarType(type_name: string) {
    if (type_name === "super") {
      return { results: super_cars };
    }

    if (type_name === "sports") {
      return { results: sports_cars };
    }

    return { error: "Car type not found" };
  }

  public static carFind(type_name: string, type_id: number) {
    if (type_name === "super") {
      const supercars = super_cars.find((item) => item.id === type_id);

      if (supercars) {
        return supercars;
      }
    }

    if (type_name === "sports") {
      const sportscars = sports_cars.find((item) => item.id === type_id);

      if (sportscars) {
        return sportscars;
      }
    }

    return { error: "Car not found" };
  }
}
