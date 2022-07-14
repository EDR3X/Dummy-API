import express, { Express } from "express";
import dotenv from "dotenv";

dotenv.config();

const app: Express = express();
const port = process.env.PORT || 5050;

import carRoute from "./routes/router.cars";
import userRoute from "./routes/router.user";

app.use("/cars", carRoute);
app.use("/user", userRoute);

app.listen(port, () => console.log(`listening in: http://localhost:${port}`));
