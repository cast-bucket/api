"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const firebase_1 = require("../firebase");
const transforms_1 = require("../util/transforms");
const podcastsRef = firebase_1.db.ref("podcasts");
const PROGRAMMING_LANGUAGE_CATEGORY = "programming-languages-and-frameworks";
exports.getAllPodcasts = () => __awaiter(this, void 0, void 0, function* () {
    const snapshot = yield podcastsRef.once("value");
    return snapshot.val();
});
exports.getPodcastsByCategory = (category, subcategory) => __awaiter(this, void 0, void 0, function* () {
    let ref;
    const categoryId = transforms_1.transformCategory(category);
    ref = transforms_1.isProgrammingLanguage(categoryId)
        ? podcastsRef.child(`${PROGRAMMING_LANGUAGE_CATEGORY}/${categoryId}`)
        : podcastsRef.child(categoryId);
    if (subcategory)
        ref = ref.orderByChild("subcategory").equalTo(subcategory);
    const snapshot = yield ref.once("value");
    return snapshot.val();
});
exports.getPodcast = (category, podcast) => __awaiter(this, void 0, void 0, function* () {
    const categoryId = transforms_1.transformCategory(category);
    const podcastId = podcast;
    const ref = transforms_1.isProgrammingLanguage(categoryId)
        ? podcastsRef.child(`${PROGRAMMING_LANGUAGE_CATEGORY}/${categoryId}/${podcastId}`)
        : podcastsRef.child(`${categoryId}/${podcastId}`);
    const snapshot = yield ref.once("value");
    return snapshot.val();
});
