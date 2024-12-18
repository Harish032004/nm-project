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
exports.CheckoutPageComponent = void 0;
const core_1 = require("@angular/core");
const forms_1 = require("@angular/forms");
const Order_1 = require("src/app/shared/models/Order");
let CheckoutPageComponent = (() => {
    let _classDecorators = [(0, core_1.Component)({
            selector: 'app-checkout-page',
            templateUrl: './checkout-page.component.html',
            styleUrls: ['./checkout-page.component.css']
        })];
    let _classDescriptor;
    let _classExtraInitializers = [];
    let _classThis;
    var CheckoutPageComponent = _classThis = class {
        constructor(cartService, userService, toastrService, orderService, router) {
            this.toastrService = toastrService;
            this.orderService = orderService;
            this.router = router;
            this.order = new Order_1.Order();
            const cart = cartService.getCart();
            this.order.items = cart.items;
            this.order.totalPrice = cart.totalPrice;
            let { name, address } = userService.currentUser;
            this.checkoutForm = new forms_1.FormGroup({
                name: new forms_1.FormControl(name, [forms_1.Validators.required]),
                address: new forms_1.FormControl(address, [forms_1.Validators.required])
            });
        }
        createOrder() {
            if (this.checkoutForm.invalid) {
                this.toastrService.warning('Please fill the inputs', 'Invalid Inputs');
                return;
            }
            if (!this.order.addressLatLng) {
                this.toastrService.warning('Please select your address from the map', 'Invalid Address');
                return;
            }
            this.order.name = this.checkoutForm.controls.name.value;
            this.order.address = this.checkoutForm.controls.address.value;
            this.orderService.create(this.order).subscribe({
                next: () => {
                    this.router.navigateByUrl('/payment');
                },
                error: (errorResponse) => {
                    this.toastrService.error(errorResponse.error, 'Order Creation Failed');
                }
            });
        }
    };
    __setFunctionName(_classThis, "CheckoutPageComponent");
    (() => {
        const _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(null) : void 0;
        __esDecorate(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name, metadata: _metadata }, null, _classExtraInitializers);
        CheckoutPageComponent = _classThis = _classDescriptor.value;
        if (_metadata) Object.defineProperty(_classThis, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        __runInitializers(_classThis, _classExtraInitializers);
    })();
    return CheckoutPageComponent = _classThis;
})();
exports.CheckoutPageComponent = CheckoutPageComponent;
