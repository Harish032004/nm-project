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
const admin_mid_1 = __importDefault(require("../middlewares/admin.mid"));
const multer_1 = __importDefault(require("multer"));
const express_async_handler_1 = __importDefault(require("express-async-handler"));
const http_status_1 = require("../constants/http_status");
const cloudinary_config_1 = require("../configs/cloudinary.config");
const router = (0, express_1.Router)();
const upload = (0, multer_1.default)();
router.post("/", admin_mid_1.default, upload.single("image"), (0, express_async_handler_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    var _a;
    const file = req.file;
    if (!file) {
        res.status(http_status_1.HTTP_BAD_REQUEST).send("No File Uploaded!");
        return;
    }
    const imageUrl = yield uploadImageToCloudinary((_a = req.file) === null || _a === void 0 ? void 0 : _a.buffer);
    res.send({ imageUrl });
})));
const uploadImageToCloudinary = (imageBuffer) => {
    const cloudinary = (0, cloudinary_config_1.configCloudinary)();
    return new Promise((resolve, reject) => {
        if (!imageBuffer)
            reject(null);
        cloudinary.uploader
            .upload_stream((error, result) => {
            if (error || !result)
                reject(error);
            else
                resolve(result.url);
        })
            .end(imageBuffer);
    });
};
exports.default = router;
