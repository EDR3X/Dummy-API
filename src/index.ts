const express = require("express");
const app = express();

app.get("/", (_req: Request, res: Response) => {
  res.json({ message: "Hello World" });
});

app.listen(3000, () => console.log("Connected"));
