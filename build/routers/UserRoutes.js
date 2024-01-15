"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
//  Controllers
const UserController_1 = __importDefault(require("../controllers/UserController"));
class UserRoutes {
    constructor() {
        this.router = (0, express_1.Router)();
        this.routes();
    }
    routes() {
        this.router.get("/", UserController_1.default.index);
        this.router.post("/", UserController_1.default.create);
    }
}
exports.default = new UserRoutes().router;
