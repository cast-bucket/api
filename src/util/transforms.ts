import memoize from "fast-memoize";
import paramCase from "param-case";

// TODO: fetch from db instead
// known programming languages
const supportedProgrammingLanguages: string[] = [
  "%2ENET",
  "clojure",
  "cpp",
  "elixir",
  "elm",
  "go",
  "groovy",
  "haskell",
  "java",
  "javascript",
  "kotlin",
  "php",
  "python",
  "r",
  "reason-ml",
  "ruby",
  "rust",
  "scala",
  "swift"
];

// defaults for some predefined categories
const languageMap: object = {
  ".NET": "%2ENET",
  "c++": "cpp",
  "C++": "cpp",
  golang: "go",
  iOS: "iOS",
  IOS: "iOS",
  JavaScript: "javascript",
  Javascript: "javascript",
  js: "javascript",
  reasonml: "reason-ml"
};

/**
 * Checks if given input is a supported language
 *
 * @param lang - input language
 */
const isSupportedLanguage = (lang: string) => {
  const key = languageMap[lang] || lang;
  return supportedProgrammingLanguages.includes(key);
};

/**
 * transforms input categoryId to a format accepted by the database category identifier
 *
 * @param categoryId - The input categoryId
 */
export const transformCategory = (categoryId: string) => {
  let output: string;
  output = languageMap[categoryId] ? languageMap[categoryId] : paramCase(categoryId);
  return output;
};

export const isProgrammingLanguage = memoize(isSupportedLanguage);
