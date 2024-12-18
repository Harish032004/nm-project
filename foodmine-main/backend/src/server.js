"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const path_1 = __importDefault(require("path"));
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const food_router_1 = __importDefault(require("./routers/food.router"));
const user_router_1 = __importDefault(require("./routers/user.router"));
const order_router_1 = __importDefault(require("./routers/order.router"));
const upload_router_1 = __importDefault(require("./routers/upload.router"));
const database_config_1 = require("./configs/database.config");
(0, database_config_1.dbConnect)();
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use((0, cors_1.default)({
    credentials: true,
    origin: ["http://localhost:4200"]
}));
//Implement everything on food.service
app.use("/api/foods", food_router_1.default);
app.use("/api/users", user_router_1.default);
app.use("/api/orders", order_router_1.default);
app.use("/api/upload", upload_router_1.default);
app.use(express_1.default.static('public'));
app.get('*', (req, res) => {
    res.sendFile(path_1.default.join(__dirname, 'public', 'index.html'));
});
const port = process.env.PORT || 5000;
app.listen(port, () => {
    console.log(`Server started at http://localhost:` + port);
});
