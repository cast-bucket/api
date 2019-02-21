import axios from "axios";
import { config } from "dotenv";
import * as path from "path";

let BASE_URL;
describe("GET /podcasts", () => {
  beforeAll(() => {
    config({ path: path.join(__dirname, "..", "test.env") });
    BASE_URL = process.env.BASE_URL;
  });

  it("should return all podcasts", async () => {
    const response: any = await axios.get(`${BASE_URL}/v1/podcasts`);
    expect(response.status).toEqual(200);
    expect(response.data).toBeObject();
  });
});
