import axios from "axios";
import { config } from "dotenv";
import * as path from "path";

let BASE_URL;
describe("GET /categories", () => {
  beforeAll(() => {
    config({ path: path.join(__dirname, "..", "test.env") });
    BASE_URL = process.env.BASE_URL;
  });

  it("should return all categories", async () => {
    const response: any = await axios.get(`${BASE_URL}/v1/categories`);
    expect(response.status).toEqual(200);
    expect(response.data.categories).toBeArray();
  });

  it("should return all categories with meta info", async () => {
    const response: any = await axios.get(`${BASE_URL}/v1/categories?meta=true`);
    expect(response.status).toEqual(200);
    expect(response.data).toBeObject();
    expect(
      Object.keys(response.data).forEach(key => {
        const category = response.data[key];
        expect(category).toHaveProperty("count");
        expect(category.count).toBeNumber();
      })
    );
  });

  it("should return a specific category", async () => {
    const response: any = await axios.get(`${BASE_URL}/v1/categories/Agile`);
    expect(response.status).toEqual(200);
    expect(response.data).toBeObject();
    expect(response.data.category).toBe("Agile");
    expect(response.data.count).toBeNumber();
  });
});
