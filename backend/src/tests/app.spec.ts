import request from "supertest";
import { app } from "../app";

describe("Create test", () => {
    it("should return status 200", async () => {
      await request(app).get('/').expect(200);
    });
});