"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.dbConnect = void 0;
const mongoose_1 = require("mongoose");
const dbConnect = () => {
    (0, mongoose_1.connect)(process.env.MONGODB_URL).then(() => {
        console.log("Database connected successfully");
    }, (error) => {
        console.error("Database connection failed");
        console.error(error);
    });
};
exports.dbConnect = dbConnect;
