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
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const express_async_handler_1 = __importDefault(require("express-async-handler"));
const user_model_1 = require("../models/user.model");
const http_status_1 = require("../constants/http_status");
const bcryptjs_1 = __importDefault(require("bcryptjs"));
const auth_mid_1 = __importDefault(require("../middlewares/auth.mid"));
const admin_mid_1 = __importDefault(require("../middlewares/admin.mid"));
const router = (0, express_1.Router)();
// Endpoint to seed sample users into the database
router.get("/seed", (0, express_async_handler_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    // Check if users are already seeded
    const usersCount = yield user_model_1.UserModel.countDocuments();
    if (usersCount > 0) {
        res.send("Sample users already seeded");
        return;
    }
    // Hash passwords and create users in the database
    for (let user of data_1.sample_users) {
        user.password = yield bcryptjs_1.default.hash(user.password, 10);
        yield user_model_1.UserModel.create(user);
    }
    // Send success message
    res.send("Sample users seeded successfully");
})));
// Endpoint for user login
router.post("/login", (0, express_async_handler_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    // const body = req.body;
    const { email, password } = req.body;
    const user = yield user_model_1.UserModel.findOne({ email });
    if (user && (yield bcryptjs_1.default.compare(password, user.password))) {
        res.send(generateTokenResponse(user));
    }
    else {
        res.status(http_status_1.HTTP_BAD_REQUEST).send("User name or password is not valid!");
    }
})));
// Endpoint for user registration
router.post("/register", (0, express_async_handler_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { name, email, password, address } = req.body;
    const user = yield user_model_1.UserModel.findOne({ email });
    if (user) {
        res.status(http_status_1.HTTP_BAD_REQUEST).send("User already exists!, please login!");
    }
    else {
        // Encrypt password and create a new user in the database
        const encryptedPassword = yield bcryptjs_1.default.hash(password, 10);
        const newUser = {
            id: "",
            name: name,
            email: email.toLowerCase(),
            password: encryptedPassword,
            address: address,
            isAdmin: false,
            isBlocked: false,
        };
        const dbUser = yield user_model_1.UserModel.create(newUser);
        // Send token response for the newly registered user
        res.send(generateTokenResponse(dbUser));
    }
})));
// Endpoint to update user profile
router.put("/updateProfile", auth_mid_1.default, (0, express_async_handler_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { name, address } = req.body;
    const user = yield user_model_1.UserModel.findByIdAndUpdate(req.user.id, { name, address }, { new: true });
    if (user) {
        // Send token response if profile update is successful
        res.send(generateTokenResponse(user));
    }
    else {
        res.status(http_status_1.HTTP_BAD_REQUEST).send("User not found!");
    }
    // OR res.send(generateTokenResponse(user!));
})));
// Endpoint to change user password
router.put("/changePassword", auth_mid_1.default, (0, express_async_handler_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { currentPassword, newPassword } = req.body;
    const user = yield user_model_1.UserModel.findById(req.user.id);
    if (!user) {
        res.status(http_status_1.HTTP_BAD_REQUEST).send("User not found!");
        return;
    }
    // Check if current password is correct
    const equal = yield bcryptjs_1.default.compare(currentPassword, user.password);
    if (!equal) {
        res.status(http_status_1.HTTP_BAD_REQUEST).send("Curent Password Is Not Correct!");
    }
    else {
        // Update password and save the user
        user.password = yield bcryptjs_1.default.hash(newPassword, 10);
        yield user.save();
        res.send();
    }
})));
// Endpoint to get all users (with optional search term)
router.get("/getAll/:searchTerm?", admin_mid_1.default, (0, express_async_handler_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { searchTerm } = req.params;
    // Define filter based on search term
    const filter = searchTerm
        ? { name: { $regex: new RegExp(searchTerm, "i") } }
        : {};
    // Retrieve users from the database, excluding passwords
    const users = yield user_model_1.UserModel.find(filter, { password: 0 });
    res.send(users);
})));
// Endpoint to toggle user block status (admin only)
router.put("/toggleBlock/:userId", admin_mid_1.default, (0, express_async_handler_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { userId } = req.params;
    if (userId === req.user.id) {
        // Send error response if attempting to block oneself
        res.status(http_status_1.HTTP_BAD_REQUEST).send("You cannot block yourself!");
        return;
    }
    // Find user by ID and toggle block status
    const user = yield user_model_1.UserModel.findById(userId);
    user.isBlocked = !user.isBlocked;
    user.save();
    // Send updated block status as the response
    res.send(user.isBlocked);
})));
// Endpoint to get a user by ID (admin access required)
router.get("/getById/:userId", admin_mid_1.default, // Middleware to ensure admin access
(0, express_async_handler_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    // Extract user ID from request parameters
    const { userId } = req.params;
    // Find user by ID, excluding the password field
    const user = yield user_model_1.UserModel.findById(userId, { password: 0 });
    // Check if user is found and send the user data, otherwise send an error response
    if (user) {
        res.send(user);
    }
    else {
        res.status(http_status_1.HTTP_BAD_REQUEST).send("User not found!");
    }
})));
// Endpoint to update user details (admin access required)
router.put("/update/:userId", admin_mid_1.default, // Middleware to ensure admin access
(0, express_async_handler_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const id = req.params.userId;
    // Extract user details from the request body
    const { name, email, address, isAdmin } = req.body;
    // Update user details in the database based on the provided ID
    yield user_model_1.UserModel.findByIdAndUpdate(id, {
        name,
        email,
        address,
        isAdmin,
    });
    res.send();
})));
// Function to generate a token response for a user
const generateTokenResponse = (user) => {
    const token = jsonwebtoken_1.default.sign({
        id: user.id,
        email: user.email,
        isAdmin: user.isAdmin,
    }, process.env.JWT_SECRET, {
        expiresIn: "30d",
    });
    return {
        id: user.id,
        email: user.email,
        name: user.name,
        address: user.address,
        isAdmin: user.isAdmin,
        token: token,
    };
};
exports.default = router;
