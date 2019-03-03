"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const fs_1 = __importDefault(require("fs"));
const path_1 = __importDefault(require("path"));
const readCredentials = (credentialsFileName, fallbackFileName) => {
    if (!fs_1.default.existsSync(path_1.default.join(__dirname, credentialsFileName))) {
        return fs_1.default.readFileSync(path_1.default.join(__dirname, fallbackFileName)).toString();
    }
    return fs_1.default.readFileSync(path_1.default.join(__dirname, credentialsFileName)).toString();
};
const credentials = JSON.parse(readCredentials("credentials.json", "credentials.template.json"));
exports.credentials = credentials;
