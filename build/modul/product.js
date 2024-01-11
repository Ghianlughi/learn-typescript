"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Asus_1 = __importDefault(require("./Asus"));
const macBook_1 = __importDefault(require("./macBook"));
let asus = new Asus_1.default("VivoBook", true, true);
console.log(asus);
let macBook = new macBook_1.default("2024", false, false);
console.log(macBook);
macBook.a();
macBook.b();
console.log(macBook);
