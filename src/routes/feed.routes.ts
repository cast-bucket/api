import RSSParser from "rss-parser";

const parserOptions = {};
const parser = new RSSParser(parserOptions);

export const parseFeed: any = async (feedUrl: string) => {
  const feed = await parser.parseURL(feedUrl);
  return feed;
};
