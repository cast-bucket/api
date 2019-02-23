import httpError from "http-errors";
import RSSParser from "rss-parser";
const parserOptions = {};
const RssParser: any = RSSParser;

const parser = new RssParser(parserOptions);
export const parseFeed: any = async (req, res) => {
  const feedUrl: string = req.query.url;
  if (!feedUrl) throw httpError(400, "Missing or invalid parameters: url");
  const feed = await parser.parseURL(feedUrl);
  return feed;
};
