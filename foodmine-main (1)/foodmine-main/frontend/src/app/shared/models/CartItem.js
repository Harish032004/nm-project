"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CartItem = void 0;
class CartItem {
    constructor(food) {
        this.food = food;
        this.quantity = 1;
        this.price = this.food.price;
    }
}
exports.CartItem = CartItem;
