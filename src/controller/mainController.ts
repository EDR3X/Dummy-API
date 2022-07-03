import { Request, Response } from "express";

const mainController = (_req: Request, res: Response) => {
  res.status(200).json({
    results: [
      {
        id: 1,
        name: "Eddy Pacman",
        username: "Yoda",
        address: "Unknown Street",
        nicknames: ["Eddy", "EddyPacman", "Eddy the Pacman"],
        fulltime: true,
        company: {
          parttime: "Eddy's Company",
          fulltime: "Yoda's Company",
        },
      },
      {
        id: 1,
        name: "Kenobi Sleldom",
        username: "Broda",
        address: "none Street",
        nicknames: ["Kenobi", "KenobiSleldom", "Kenobi the Sleldom"],
        fulltime: false,
        company: {
          parttime: "Jedi's Company",
          fulltime: "Vador's Company",
        },
      },
    ],
  });
};

export default { mainController };
