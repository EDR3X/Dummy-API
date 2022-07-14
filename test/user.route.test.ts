import express from "express";
import request from "supertest";

const app = express();
app.use(express.json());

import userRoute from "../src/routes/router.user";
app.use("/user", userRoute);

describe("User Route Controller Test", () => {
  test("GET /user", async () => {
    const response = await request(app).get("/user");
    expect(response.status).toBe(200);
  });

  test("GET /user/:id", async () => {
    const response = await request(app).get("/user/2");
    expect(response.status).toBe(200);
  });
});
