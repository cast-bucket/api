import axios from "axios";
import { config } from "dotenv";
import path from "path";

describe("GET /user/:userId/profile", () => {
  beforeAll(() => {
    config({ path: path.join(__dirname, "..", "test.env") });
  });

  it("should return the user profile", async () => {
    const response: any = await axios.get(
      `${process.env.BASE_URL}/v1/user/${process.env.DEFAULT_USER}`
    );
    expect(response.status).toEqual(200);
  });
});
