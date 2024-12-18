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
const express_async_handler_1 = __importDefault(require("express-async-handler"));
const http_status_1 = require("../constants/http_status");
const order_model_1 = require("../models/order.model");
const order_status_1 = require("../constants/order_status");
const auth_mid_1 = __importDefault(require("../middlewares/auth.mid"));
const user_model_1 = require("../models/user.model");
const mail_helper_1 = require("../helpers/mail.helper");
const router = (0, express_1.Router)();
router.use(auth_mid_1.default);
router.post("/create", (0, express_async_handler_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const requestOrder = req.body;
    if (requestOrder.items.length <= 0) {
        res.status(http_status_1.HTTP_BAD_REQUEST).send('Cart Is Empty!');
        return;
    }
    yield order_model_1.OrderModel.deleteOne({
        user: req.user.id,
        status: order_status_1.OrderStatus.NEW
    });
    const newOrder = new order_model_1.OrderModel(Object.assign(Object.assign({}, requestOrder), { user: req.user.id }));
    yield newOrder.save();
    res.send(newOrder);
})));
router.get('/newOrderForCurrentUser', (0, express_async_handler_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const order = yield getNewOrderForCurrentUser(req);
    if (order)
        res.send(order);
    else
        res.status(http_status_1.HTTP_BAD_REQUEST).send();
})));
router.post('/pay', (0, express_async_handler_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { paymentId } = req.body;
    const order = yield getNewOrderForCurrentUser(req);
    if (!order) {
        res.status(http_status_1.HTTP_BAD_REQUEST).send('Order Not Found!');
        return;
    }
    order.paymentId = paymentId;
    order.status = order_status_1.OrderStatus.PAID;
    yield order.save();
    (0, mail_helper_1.sendEmailReceipt)(order);
    res.send(order._id);
})));
router.get('/track/:id', (0, express_async_handler_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const order = yield order_model_1.OrderModel.findById(req.params.id);
    if (order)
        res.send(order);
    else
        res.status(http_status_1.HTTP_BAD_REQUEST).send();
})));
router.get("/allstatus", (0, express_async_handler_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const allStatus = Object.values(order_status_1.OrderStatus);
    res.send(allStatus);
})));
router.get("/:status?", (0, express_async_handler_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const status = req.params.status;
    const user = yield user_model_1.UserModel.findById(req.user.id);
    const filter = {};
    if (!user.isAdmin)
        filter.user = user === null || user === void 0 ? void 0 : user._id;
    if (status)
        filter.status = status;
    const orders = yield order_model_1.OrderModel.find(filter).sort('-createdAt');
    res.send(orders);
})));
function getNewOrderForCurrentUser(req) {
    return __awaiter(this, void 0, void 0, function* () {
        return yield order_model_1.OrderModel.findOne({
            user: req.user.id,
            status: order_status_1.OrderStatus.NEW
        }).populate('user');
    });
}
exports.default = router;
