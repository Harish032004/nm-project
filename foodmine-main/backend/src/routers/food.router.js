"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const data_1 = require("../data");
const express_async_handler_1 = __importDefault(require("express-async-handler"));
const food_model_1 = require("../models/food.model");
const admin_mid_1 = __importDefault(require("../middlewares/admin.mid"));
const router = (0, express_1.Router)();
router.get("/seed", (0, express_async_handler_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const foodsCount = yield food_model_1.FoodModel.countDocuments();
    if (foodsCount > 0) {
        res.send("Sample foods already seeded");
        return;
    }
    yield food_model_1.FoodModel.create(data_1.sample_foods);
    res.send("Sample foods seeded successfully");
})));
router.get("/", (0, express_async_handler_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const foods = yield food_model_1.FoodModel.find();
    res.send(foods);
})));
router.post("/", admin_mid_1.default, (0, express_async_handler_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { name, price, tags, favorite, imageUrl, origins, cookTime } = req.body;
    const food = new food_model_1.FoodModel({
        name,
        price,
        tags: tags.split ? tags.split(',') : tags,
        favorite,
        imageUrl,
        origins: origins.split ? origins.split(',') : origins,
        cookTime,
    });
    yield food.save();
    res.send(food);
})));
router.put("/", admin_mid_1.default, (0, express_async_handler_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id, name, price, tags, favorite, imageUrl, origins, cookTime } = req.body;
    yield food_model_1.FoodModel.updateOne({ _id: id }, {
        name,
        price,
        tags: tags.split ? tags.split(',') : tags,
        favorite,
        imageUrl,
        origins: origins.split ? origins.split(',') : origins,
        cookTime
    });
    res.send();
})));
router.delete("/:foodId", admin_mid_1.default, (0, express_async_handler_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { foodId } = req.params;
    yield food_model_1.FoodModel.deleteOne({ _id: foodId });
    res.send();
})));
router.get("/tags", (0, express_async_handler_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const tags = yield food_model_1.FoodModel.aggregate([
        { $unwind: "$tags" },
        { $group: { _id: "$tags", count: { $sum: 1 } } },
        { $project: { _id: 0, name: "$_id", count: "$count" } },
    ]).sort({ count: -1 });
    const all = {
        name: "All",
        count: yield food_model_1.FoodModel.countDocuments(),
    };
    tags.unshift(all);
    res.send(tags);
})));
router.get("/search/:searchTerm", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const searchRegex = new RegExp(req.params.searchTerm, "i");
    const foods = yield food_model_1.FoodModel.find({ name: { $regex: searchRegex } });
    res.send(foods);
}));
router.get("/tag/:tagName", (0, express_async_handler_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const foods = yield food_model_1.FoodModel.find({ tags: req.params.tagName });
    res.send(foods);
})));
router.get("/:foodId", (0, express_async_handler_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const food = yield food_model_1.FoodModel.findById(req.params.foodId);
    res.send(food);
})));
exports.default = router;
