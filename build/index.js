"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const body_parser_1 = __importDefault(require("body-parser"));
const morgan_1 = __importDefault(require("morgan"));
const compression_1 = __importDefault(require("compression"));
const helmet_1 = __importDefault(require("helmet"));
const cors_1 = __importDefault(require("cors"));
// routers
const UserRoutes_1 = __importDefault(require("./routers/UserRoutes"));
class App {
    constructor() {
        this.app = (0, express_1.default)();
        this.plugins();
        this.routes();
    }
    plugins() {
        this.app.use(body_parser_1.default.json());
        this.app.use((0, morgan_1.default)("dev"));
        this.app.use((0, compression_1.default)());
        this.app.use((0, helmet_1.default)());
        this.app.use((0, cors_1.default)());
    }
    routes() {
        this.app.route("/").get((reg, res) => {
            res.send("ini adalah route menggunakan TS");
        });
        this.app.use("api/v1/users", UserRoutes_1.default);
    }
}
const port = 8000;
const app = new App().app;
app.listen(port, () => {
    console.log("Aplikasi ini berjalan di port" + port);
});
