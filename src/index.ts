import express from "express";
const app = express();
const PORT = 5050;
import mainRouter from "./routes/router";

app.use("/", mainRouter);

app.listen(PORT, () => console.log(`listening in: http://localhost:${PORT}`));
