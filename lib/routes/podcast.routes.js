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
const http_errors_1 = __importDefault(require("http-errors"));
const podcast_model_1 = require("../models/podcast.model");
exports.fetchAllPodcasts = (req, res) => __awaiter(this, void 0, void 0, function* () {
    try {
        const results = yield podcast_model_1.getAllPodcasts();
        res.code(200).send(results);
    }
    catch (error) {
        res.code(error.statusCode || 500).send({ message: error.message });
    }
});
exports.fetchPodcastsByCategory = (req, res) => __awaiter(this, void 0, void 0, function* () {
    try {
        const categoryId = req.params.categoryId;
        if (!categoryId)
            throw http_errors_1.default(400, "Missing or invalid parameter: categoryId");
        const subcategory = req.query.subcategory;
        const results = yield podcast_model_1.getPodcastsByCategory(categoryId, subcategory);
        res.code(200).send(results);
    }
    catch (error) {
        res.code(error.statusCode || 500).send({ message: error.message });
    }
});
exports.fetchPodcast = (req, res) => __awaiter(this, void 0, void 0, function* () {
    try {
        const categoryId = req.params.categoryId;
        const podcastId = req.params.podcastId;
        const results = yield podcast_model_1.getPodcast(categoryId, podcastId);
        res.code(200).send(results);
    }
    catch (error) {
        res.code(error.statusCode || 500).send({ message: error.message });
    }
});
