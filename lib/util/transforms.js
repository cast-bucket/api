"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const fast_memoize_1 = __importDefault(require("fast-memoize"));
const param_case_1 = __importDefault(require("param-case"));
// TODO: fetch from db instead
// known programming languages
const supportedProgrammingLanguages = [
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
const languageMap = {
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
const isSupportedLanguage = (lang) => {
    const key = languageMap[lang] || lang;
    return supportedProgrammingLanguages.includes(key);
};
/**
 * transforms input categoryId to a format accepted by the database category identifier
 *
 * @param categoryId - The input categoryId
 */
exports.transformCategory = (categoryId) => {
    let output;
    output = languageMap[categoryId] ? languageMap[categoryId] : param_case_1.default(categoryId);
    return output;
};
exports.isProgrammingLanguage = fast_memoize_1.default(isSupportedLanguage);
