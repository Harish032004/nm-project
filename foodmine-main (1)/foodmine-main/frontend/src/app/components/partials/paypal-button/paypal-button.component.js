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
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __setFunctionName = (this && this.__setFunctionName) || function (f, name, prefix) {
    if (typeof name === "symbol") name = name.description ? "[".concat(name.description, "]") : "";
    return Object.defineProperty(f, "name", { configurable: true, value: prefix ? "".concat(prefix, " ", name) : name });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PaypalButtonComponent = void 0;
const core_1 = require("@angular/core");
let PaypalButtonComponent = (() => {
    let _classDecorators = [(0, core_1.Component)({
            selector: 'paypal-button',
            templateUrl: './paypal-button.component.html',
            styleUrls: ['./paypal-button.component.css']
        })];
    let _classDescriptor;
    let _classExtraInitializers = [];
    let _classThis;
    let _order_decorators;
    let _order_initializers = [];
    let _order_extraInitializers = [];
    let _paypalElement_decorators;
    let _paypalElement_initializers = [];
    let _paypalElement_extraInitializers = [];
    var PaypalButtonComponent = _classThis = class {
        constructor(orderService, cartService, router, toastrService) {
            this.orderService = orderService;
            this.cartService = cartService;
            this.router = router;
            this.toastrService = toastrService;
            this.order = __runInitializers(this, _order_initializers, void 0);
            this.paypalElement = (__runInitializers(this, _order_extraInitializers), __runInitializers(this, _paypalElement_initializers, void 0));
            __runInitializers(this, _paypalElement_extraInitializers);
            this.orderService = orderService;
            this.cartService = cartService;
            this.router = router;
            this.toastrService = toastrService;
        }
        ngOnInit() {
            const self = this;
            paypal.Buttons({
                createOrder: (data, actions) => {
                    return actions.order.create({
                        purchase_units: [
                            {
                                amount: {
                                    currency_code: 'USD',
                                    value: self.order.totalPrice
                                }
                            }
                        ]
                    });
                },
                onApprove: (data, actions) => __awaiter(this, void 0, void 0, function* () {
                    const payment = yield actions.order.capture();
                    this.order.paymentId = payment.id;
                    self.orderService.pay(this.order).subscribe({
                        next: (orderId) => {
                            this.cartService.clearCart();
                            this.router.navigateByUrl('/track/' + orderId);
                            this.toastrService.success('Payment Saved Successfully', 'Success');
                        },
                        error: (error) => {
                            this.toastrService.error('Payment Save Failed', 'Error');
                        }
                    });
                }),
                onError: (err) => {
                    this.toastrService.error('Payment Failed', 'Error');
                    console.log(err);
                }
            }).render(this.paypalElement.nativeElement);
        }
    };
    __setFunctionName(_classThis, "PaypalButtonComponent");
    (() => {
        const _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(null) : void 0;
        _order_decorators = [(0, core_1.Input)()];
        _paypalElement_decorators = [(0, core_1.ViewChild)('paypal', { static: true })];
        __esDecorate(null, null, _order_decorators, { kind: "field", name: "order", static: false, private: false, access: { has: obj => "order" in obj, get: obj => obj.order, set: (obj, value) => { obj.order = value; } }, metadata: _metadata }, _order_initializers, _order_extraInitializers);
        __esDecorate(null, null, _paypalElement_decorators, { kind: "field", name: "paypalElement", static: false, private: false, access: { has: obj => "paypalElement" in obj, get: obj => obj.paypalElement, set: (obj, value) => { obj.paypalElement = value; } }, metadata: _metadata }, _paypalElement_initializers, _paypalElement_extraInitializers);
        __esDecorate(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name, metadata: _metadata }, null, _classExtraInitializers);
        PaypalButtonComponent = _classThis = _classDescriptor.value;
        if (_metadata) Object.defineProperty(_classThis, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        __runInitializers(_classThis, _classExtraInitializers);
    })();
    return PaypalButtonComponent = _classThis;
})();
exports.PaypalButtonComponent = PaypalButtonComponent;
