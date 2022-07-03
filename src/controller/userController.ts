import { Request, Response } from "express";

const mainController = (_req: Request, res: Response) => {
  res.status(200).json({
    results: [
      {
        id: 1,
        name: "Eddy Pacman",
        username: "Yoda",
        address: {
          street: "123 Main St",
          city: "New York",
          state: "NY",
        },
        nicknames: ["Eddy", "EddyPacman", "Eddy the Pacman"],
        fulltime: true,
        company: {
          previous: "Eddy's Company",
          current: "Yoda's Company",
        },
      },
      {
        id: 2,
        name: "Kenobi Sleldom",
        username: "Broda",
        address: {
          street: "544 Main St",
          city: "Sacramento",
          state: "CA",
        },
        nicknames: ["Kenobi", "KenobiSleldom", "Kenobi the Sleldom"],
        fulltime: false,
        company: {
          previous: "Jedi's Company",
          current: "Vador's Company",
        },
      },
      {
        id: 3,
        name: "Wayne Rooney",
        username: "Rigsby",
        address: {
          street: "251 Cooper St",
          city: "Washington",
          state: "DC",
        },
        nicknames: ["Wayne", "WayneRooney", "Wayne the Rooney"],
        fulltime: true,
        company: {
          previous: "Rigsby's Company",
          current: "123 Co. Ltd.",
        },
      },
    ],
  });
};

export default { mainController };
