import express from "express";
import request from "supertest";

const app = express();
app.use(express.json());

import carsRoute from "../src/routes/router.cars";
app.use("/cars", carsRoute);

describe("Cars Route Controller Test", () => {
  test("GET /cars", async () => {
    const response = await request(app).get("/cars");
    expect(response.status).toBe(200);
  });

  test("GET /cars/:type", async () => {
    const response = await request(app).get("/cars/sports");
    expect(response.status).toBe(200);
  });

  test("GET /cars/:type/:id", async () => {
    const response = await request(app).get("/cars/sports/1");
    expect(response.status).toBe(200);
  });
});
