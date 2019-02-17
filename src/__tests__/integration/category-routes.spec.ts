import axios from "axios";
import { config } from "dotenv";
import * as path from "path";

describe("GET /categories", () => {
  beforeAll(() => {
    config({ path: path.join(__dirname, "..", "test.env") });
  });

  it("should return all categories", async () => {
    const response: any = await axios.get(`${process.env.BASE_URL}/v1/categories`);
    expect(response.status).toEqual(200);
    expect(response.data.categories).toBeArray();
  });
});
