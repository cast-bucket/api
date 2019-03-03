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
const category_model_1 = require("../models/category.model");
exports.fetchAllCategories = (req, res) => __awaiter(this, void 0, void 0, function* () {
    try {
        const showMetadata = req.query.meta === "true";
        const results = yield category_model_1.getAllCategories(showMetadata);
        res.code(200).send(results);
    }
    catch (error) {
        res.send({ message: error.message, statusCode: error.status });
    }
});
exports.fetchCategory = (req, res) => __awaiter(this, void 0, void 0, function* () {
    try {
        const showMetadata = req.query.meta === "true";
        const categoryId = req.params.categoryId;
        if (!categoryId)
            throw http_errors_1.default(400, "Missing or invalid params: categoryId");
        const results = yield category_model_1.getCategory(categoryId, showMetadata);
        res.code(200).send(results);
    }
    catch (error) {
        res.send({ statusCode: error.status || 500, message: error.message });
    }
});
