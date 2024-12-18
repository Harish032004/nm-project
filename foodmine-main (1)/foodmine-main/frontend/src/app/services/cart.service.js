"use strict";
var __esDecorate = (this && this.__esDecorate) || function (ctor, descriptorIn, decorators, contextIn, initializers, extraInitializers) {
    function accept(f) { if (f !== void 0 && typeof f !== "function") throw new TypeError("Function expected"); return f; }
    var kind = contextIn.kind, key = kind === "getter" ? "get" : kind === "setter" ? "set" : "value";
    var target = !descriptorIn && ctor ? contextIn["static"] ? ctor : ctor.prototype : null;
    var descriptor = descriptorIn || (target ? Object.getOwnPropertyDescriptor(target, contextIn.name) : {});
    var _, done = false;
    for (var i = decorators.length - 1; i >= 0; i--) {
        var context = {};
        for (var p in contextIn) context[p] = p === "access" ? {} : contextIn[p];
        for (var p in contextIn.access) context.access[p] = contextIn.access[p];
        context.addInitializer = function (f) { if (done) throw new TypeError("Cannot add initializers after decoration has completed"); extraInitializers.push(accept(f || null)); };
        var result = (0, decorators[i])(kind === "accessor" ? { get: descriptor.get, set: descriptor.set } : descriptor[key], context);
        if (kind === "accessor") {
            if (result === void 0) continue;
            if (result === null || typeof result !== "object") throw new TypeError("Object expected");
            if (_ = accept(result.get)) descriptor.get = _;
            if (_ = accept(result.set)) descriptor.set = _;
            if (_ = accept(result.init)) initializers.unshift(_);
        }
        else if (_ = accept(result)) {
            if (kind === "field") initializers.unshift(_);
            else descriptor[key] = _;
        }
    }
    if (target) Object.defineProperty(target, contextIn.name, descriptor);
    done = true;
};
var __runInitializers = (this && this.__runInitializers) || function (thisArg, initializers, value) {
    var useValue = arguments.length > 2;
    for (var i = 0; i < initializers.length; i++) {
        value = useValue ? initializers[i].call(thisArg, value) : initializers[i].call(thisArg);
    }
    return useValue ? value : void 0;
};
var __setFunctionName = (this && this.__setFunctionName) || function (f, name, prefix) {
    if (typeof name === "symbol") name = name.description ? "[".concat(name.description, "]") : "";
    return Object.defineProperty(f, "name", { configurable: true, value: prefix ? "".concat(prefix, " ", name) : name });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CartService = void 0;
const core_1 = require("@angular/core");
const Cart_1 = require("../shared/models/Cart");
const rxjs_1 = require("rxjs");
const CartItem_1 = require("../shared/models/CartItem");
// The `Injectable` decorator marks this class as injectable at the root level,
// meaning it can be provided as a singleton service throughout the entire application.
let CartService = (() => {
    let _classDecorators = [(0, core_1.Injectable)({
            providedIn: 'root'
        })];
    let _classDescriptor;
    let _classExtraInitializers = [];
    let _classThis;
    var CartService = _classThis = class {
        constructor() {
            // Initialize the cart with data from local storage
            this.cart = this.getCartFromLocalStorage();
            // Create a BehaviorSubject to emit cart changes to subscribers
            this.cartSubject = new rxjs_1.BehaviorSubject(this.cart);
        }
        // Add a food item to the cart
        addToCart(food) {
            // Checks if the food item already exists in the cart
            let cartItem = this.cart.items.find(item => item.food.id === food.id);
            if (cartItem) {
                return; // If the item is already in the cart, do nothing
            }
            // Otherwise, add a new cart item with the specified food and update local storage
            this.cart.items.push(new CartItem_1.CartItem(food));
            this.setCartToLocalStorage();
        }
        // Removes a food item from the cart (by its ID)
        removeFromCart(foodId) {
            this.cart.items = this.cart.items.filter(item => item.food.id !== foodId);
            this.setCartToLocalStorage();
        }
        // Change the quantity of a food item in the cart
        changeQuantity(foodId, quantity) {
            // Find the cart item with the specified food ID
            let cartItem = this.cart.items.find(item => item.food.id === foodId);
            // If the item exists, update its quantity and price
            if (cartItem) {
                cartItem.quantity = quantity;
                cartItem.price = quantity * cartItem.food.price;
            }
            // Update the cart in local storage and notify subscribers
            this.setCartToLocalStorage();
        }
        // Clear all items from the cart
        clearCart() {
            // Create a new empty cart and update local storage
            this.cart = new Cart_1.Cart();
            this.setCartToLocalStorage();
        }
        // Get an observable to subscribe to cart changes
        getCartObservable() {
            // Return the cart subject as an observable
            return this.cartSubject.asObservable();
        }
        getCart() {
            return this.cartSubject.value;
        }
        // Update local storage and notify subscribers with the latest cart data
        setCartToLocalStorage() {
            // Update total price and total count based on the items in the cart
            this.cart.totalPrice = this.cart.items.reduce((prevSum, currentItem) => prevSum + currentItem.price, 0);
            this.cart.totalCount = this.cart.items.reduce((prevSum, currentItem) => prevSum + currentItem.quantity, 0);
            // Convert the cart object to JSON and store it in local storage
            const cartJson = JSON.stringify(this.cart);
            localStorage.setItem('Cart', cartJson);
            // Notify subscribers with the updated cart data
            this.cartSubject.next(this.cart);
        }
        // Retrieves the cart from local storage if it exists, otherwise returns a new empty cart
        getCartFromLocalStorage() {
            const cartJson = localStorage.getItem('Cart');
            return cartJson ? JSON.parse(cartJson) : new Cart_1.Cart();
        }
    };
    __setFunctionName(_classThis, "CartService");
    (() => {
        const _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(null) : void 0;
        __esDecorate(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name, metadata: _metadata }, null, _classExtraInitializers);
        CartService = _classThis = _classDescriptor.value;
        if (_metadata) Object.defineProperty(_classThis, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        __runInitializers(_classThis, _classExtraInitializers);
    })();
    return CartService = _classThis;
})();
exports.CartService = CartService;
