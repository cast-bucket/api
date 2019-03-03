"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const fast_memoize_1 = __importDefault(require("fast-memoize"));
const firebase_1 = require("../firebase");
const transforms_1 = require("../util/transforms");
const categoriesReference = firebase_1.db.ref("categories");
exports.getAllCategories = (meta) => __awaiter(this, void 0, void 0, function* () {
    const snapshot = yield categoriesReference.once("value");
    const results = snapshot.val();
    if (!meta && results) {
        const categories = Object.keys(results).map(category => category);
        return categories;
    }
    return results || {};
});
exports.getCategory = (category, meta) => __awaiter(this, void 0, void 0, function* () {
    const key = transforms_1.transformCategory(category);
    const snapshot = yield categoriesReference
        .child(key)
        .once("value");
    const results = snapshot.val();
    if (!meta && results && results._meta && results._meta.hasSubCategories) {
        const categories = Object.keys(results).filter(val => val !== "_meta");
        return categories;
    }
    if (!results)
        return {};
    else
        return Object.assign({}, results, { category });
});
exports.getProgrammingLanguages = () => __awaiter(this, void 0, void 0, function* () {
    const memoized = fast_memoize_1.default(exports.getCategory("programming-languages-and-frameworks"));
    return yield memoized;
});
