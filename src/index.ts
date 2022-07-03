import express, { Express } from "express";
import dotenv from "dotenv";

dotenv.config();

const app: Express = express();
const port = process.env.PORT || 8000;

import userRouter from "./routes/router";

app.use("/users", userRouter);

app.listen(port, () => console.log(`listening in: http://localhost:${port}`));
