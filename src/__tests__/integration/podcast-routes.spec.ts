import axios from "axios";
import { config } from "dotenv";
import path from "path";

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

  it("should return podcasts of a specific category", async () => {
    const response: any = await axios.get(`${BASE_URL}/v1/podcasts/agile`);
    expect(response.status).toEqual(200);
    expect(response.data).toBeObject();
    expect(Object.keys(response.data)).toBeArrayOfSize(4);
  });

  it("should return podcasts of a specific programming language", async () => {
    const response: any = await axios.get(`${BASE_URL}/v1/podcasts/js`);
    expect(response.status).toEqual(200);
    expect(response.data).toBeObject();
    expect(Object.keys(response.data)).toBeArrayOfSize(17);
  });
});
