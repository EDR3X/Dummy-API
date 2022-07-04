import { Request, Response } from "express";

const userController = (_req: Request, res: Response) => {
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
      {
        id: 4,
        name: "Susan Darcy",
        username: "Sdarcy",
        address: {
          street: "251 NY St",
          city: "Texas",
          state: "TX",
        },
        nicknames: ["Susan", "SusanDarcy", "Susan the Darcy"],
        fulltime: false,
        company: {
          previous: "Yoda's Company",
          current: "Sdarcy's Company",
        },
      },
      {
        id: 5,
        name: "Jhon Doe",
        username: "JD",
        address: {
          street: "unknown street",
          city: "USt Louis",
          state: "USA",
        },
        nicknames: ["Jhon", "Jhon the Doe"],
        fulltime: true,
        company: {
          previous: "Y322 Co. Ltd.",
          current: "U91 Co. Ltd.",
        },
      },
    ],
  });
};

const carsController = (_req: Request, res: Response) => {
  res.status(200).json({
    super: [
      {
        id: 1,
        brand: "Pegassi",
        name: "Osiris",
        speed: 8.5,
        brake: 3.5,
        acceleration: 9,
        handling: 8,
        price: "$1,950,000",
        image:
          "https://oyster.ignimgs.com/mediawiki/apis.ign.com/grand-theft-auto-5/e/e3/Osiris.png?width=325",
      },
      {
        id: 2,
        brand: "Progen",
        name: "T20",
        speed: 8.5,
        brake: 3.5,
        acceleration: 9,
        handling: 8,
        price: "$2,200,000",
        image:
          "https://oyster.ignimgs.com/mediawiki/apis.ign.com/grand-theft-auto-5/d/de/T20_002.jpg?width=960",
      },
      {
        id: 3,
        brand: "Pegassi",
        name: "Reaper",
        speed: 8.5,
        brake: 3.5,
        acceleration: 9,
        handling: 8,
        price: "$1,595,000",
        image:
          "https://oyster.ignimgs.com/mediawiki/apis.ign.com/grand-theft-auto-5/7/73/DLC.png?width=960",
      },
      {
        id: 4,
        brand: "Grotti",
        name: "X80 Proto",
        speed: 8.5,
        brake: 3.5,
        acceleration: 9.5,
        handling: 8,
        price: "$2,700,000",
        image:
          "https://oyster.ignimgs.com/mediawiki/apis.ign.com/grand-theft-auto-5/7/77/X80-proto.jpg?width=960",
      },
      {
        id: 5,
        brand: "Overflod",
        name: "Autarch",
        speed: 8.5,
        brake: 4,
        acceleration: 9.5,
        handling: 10,
        price: "$1,955,000",
        image:
          "https://oyster.ignimgs.com/mediawiki/apis.ign.com/grand-theft-auto-5/4/48/Autarch.jpg?width=960",
      },
      {
        id: 6,
        brand: "Coil",
        name: "Cyclone",
        speed: 8.5,
        brake: 3.5,
        acceleration: 8,
        handling: 8,
        price: "$1,890,000",
        image:
          "https://oyster.ignimgs.com/mediawiki/apis.ign.com/grand-theft-auto-5/3/31/Cyclone.jpg?width=960",
      },
      {
        id: 7,
        brand: "Pegassi",
        name: "Tezeract",
        speed: 9,
        brake: 4.5,
        acceleration: 5,
        handling: 10,
        price: "$2,825,000",
        image:
          "https://oyster.ignimgs.com/mediawiki/apis.ign.com/grand-theft-auto-5/0/01/Tezeract.jpg?width=960",
      },
      {
        id: 8,
        brand: "coil",
        name: "Rocket Voltic",
        speed: 7.5,
        brake: 3.5,
        acceleration: 4.5,
        handling: 7.5,
        price: "$3,830,400",
        image:
          "https://oyster.ignimgs.com/mediawiki/apis.ign.com/grand-theft-auto-5/a/a6/Rocket-voltic.jpg?width=960",
      },
      {
        id: 9,
        brand: "Declasse",
        name: "Scramjet",
        speed: 8.5,
        brake: 3,
        acceleration: 10,
        handling: 8,
        price: "$4,628,400",
        image:
          "https://oyster.ignimgs.com/mediawiki/apis.ign.com/grand-theft-auto-5/8/8b/Scramjet.jpg?width=960",
      },
      {
        id: 10,
        brand: "Grotti",
        name: "Vigilante",
        speed: 7,
        brake: 2,
        acceleration: 6.5,
        handling: 6,
        price: "$3,750,400",
        image:
          "https://oyster.ignimgs.com/mediawiki/apis.ign.com/grand-theft-auto-5/1/11/Vigilantee.jpg?width=960",
      },
    ],
    sports: [
      {
        id: 21,
        brand: "Pegassi",
        name: "Osiris",
        speed: 8.5,
        brake: 3.5,
        acceleration: 9,
        handling: 8,
        price: "$1,950,000",
        image:
          "https://oyster.ignimgs.com/mediawiki/apis.ign.com/grand-theft-auto-5/e/e3/Osiris.png?width=960",
      },
      {
        id: 22,
        brand: "Progen",
        name: "T20",
        speed: 8.5,
        brake: 3.5,
        acceleration: 9,
        handling: 8,
        price: "$2,200,000",
        image:
          "https://oyster.ignimgs.com/mediawiki/apis.ign.com/grand-theft-auto-5/d/de/T20_002.jpg?width=960",
      },
      {
        id: 23,
        brand: "Pegassi",
        name: "Reaper",
        speed: 8.5,
        brake: 3.5,
        acceleration: 9,
        handling: 8,
        price: "$1,595,000",
        image:
          "https://oyster.ignimgs.com/mediawiki/apis.ign.com/grand-theft-auto-5/7/73/DLC.png?width=960",
      },
      {
        id: 24,
        brand: "Vapid",
        name: "FMJ",
        speed: 8.5,
        brake: 3.5,
        acceleration: 9,
        handling: 8,
        price: "$1,750,000",
        image:
          "https://oyster.ignimgs.com/mediawiki/apis.ign.com/grand-theft-auto-5/c/cd/DLC2.png?width=960",
      },
      {
        id: 25,
        brand: "Ocelot",
        name: "Pariah",
        speed: 8.5,
        brake: 3.5,
        acceleration: 8,
        handling: 8,
        price: "$1,420,000",
        image:
          "https://oyster.ignimgs.com/mediawiki/apis.ign.com/grand-theft-auto-5/3/32/Pariah.jpg?width=325",
      },
    ],
  });
};

export default { userController, carsController };
