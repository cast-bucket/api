import axios from "axios";
import { config } from "dotenv";
import path from "path";

describe("GET /feed", () => {
  beforeAll(() => {
    config({ path: path.join(__dirname, "..", "test.env") });
  });

  it("should return the parsed feed", async () => {
    const feedUrl: string = "https://www.gonemobile.io/rss";
    const response: any = await axios.get(`${process.env.BASE_URL}/v1/feed?url=${feedUrl}`);
    expect(response.status).toEqual(200);
    expect(response.data.items).toBeArray();
    expect(response.data.items[0]).toHaveProperty("creator");
    expect(response.data.items[0]).toHaveProperty("title");
    expect(response.data.items[0]).toHaveProperty("link");
    expect(response.data.items[0]).toHaveProperty("pubDate");
    expect(response.data.items[0]).toHaveProperty("author");
    expect(response.data.items[0]).toHaveProperty("content");
    expect(response.data.items[0]).toHaveProperty("contentSnippet");
    expect(response.data.items[0]).toHaveProperty("guid");
  });
});
