"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
// define app port
const APP_PORT = 4000;
// create express application
const app = (0, express_1.default)();
// define a home route
app.get("/", (req, res) => {
    // send welcome message
    res.send("Hello from Q&A Engine app!");
});
//  start the server and listen to the port
app.listen(APP_PORT, () => {
    console.log(`Application is running on http://localhost:${APP_PORT}`);
});
