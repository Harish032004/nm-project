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
exports.AppRoutingModule = void 0;
const core_1 = require("@angular/core");
const router_1 = require("@angular/router");
const home_component_1 = require("./components/pages/home/home.component");
const food_page_component_1 = require("./components/pages/food-page/food-page.component");
const cart_page_component_1 = require("./components/pages/cart-page/cart-page.component");
const login_page_component_1 = require("./components/pages/login-page/login-page.component");
const register_page_component_1 = require("./components/pages/register-page/register-page.component");
const checkout_page_component_1 = require("./components/pages/checkout-page/checkout-page.component");
const auth_guard_1 = require("./auth/guards/auth.guard");
const payment_page_component_1 = require("./components/pages/payment-page/payment-page.component");
const order_track_page_component_1 = require("./components/pages/order-track-page/order-track-page.component");
const profile_page_component_1 = require("./components/pages/profile-page/profile-page.component");
const orders_page_component_1 = require("./components/pages/orders-page/orders-page.component");
const dashboard_component_1 = require("./components/pages/dashboard/dashboard.component");
const foods_admin_page_component_1 = require("./components/pages/foods-admin-page/foods-admin-page.component");
const admin_guard_1 = require("./auth/guards/admin.guard");
const food_edit_page_component_1 = require("./components/pages/food-edit-page/food-edit-page.component");
const users_page_component_1 = require("./components/pages/users-page/users-page.component");
const user_edit_page_component_1 = require("./components/pages/user-edit-page/user-edit-page.component");
const routes = [
    { path: '', component: home_component_1.HomeComponent },
    { path: 'search/:searchTerm', component: home_component_1.HomeComponent },
    { path: 'tag/:tag', component: home_component_1.HomeComponent },
    { path: 'food/:id', component: food_page_component_1.FoodPageComponent },
    { path: 'cart-page', component: cart_page_component_1.CartPageComponent },
    { path: 'login', component: login_page_component_1.LoginPageComponent },
    { path: 'register', component: register_page_component_1.RegisterPageComponent },
    { path: 'checkout', component: checkout_page_component_1.CheckoutPageComponent, canActivate: [auth_guard_1.authGuard] },
    { path: 'payment', component: payment_page_component_1.PaymentPageComponent, canActivate: [auth_guard_1.authGuard] },
    { path: 'track/:orderId', component: order_track_page_component_1.OrderTrackPageComponent, canActivate: [auth_guard_1.authGuard] },
    { path: 'profile', component: profile_page_component_1.ProfilePageComponent, canActivate: [auth_guard_1.authGuard] },
    // { path: 'orders', redirectTo: 'orders/' },
    { path: 'orders', component: orders_page_component_1.OrdersPageComponent, canActivate: [auth_guard_1.authGuard] },
    { path: 'orders/:filter', component: orders_page_component_1.OrdersPageComponent, canActivate: [auth_guard_1.authGuard] },
    { path: 'dashboard', component: dashboard_component_1.DashboardComponent, canActivate: [auth_guard_1.authGuard] },
    { path: 'admin/foods', component: foods_admin_page_component_1.FoodsAdminPageComponent, canActivate: [auth_guard_1.authGuard, admin_guard_1.adminGuard] },
    { path: 'admin/foods/:searchTerm', component: foods_admin_page_component_1.FoodsAdminPageComponent, canActivate: [auth_guard_1.authGuard, admin_guard_1.adminGuard] },
    { path: 'admin/addFood', component: food_edit_page_component_1.FoodEditPageComponent, canActivate: [auth_guard_1.authGuard, admin_guard_1.adminGuard] },
    { path: 'admin/editFood/:id', component: food_edit_page_component_1.FoodEditPageComponent, canActivate: [auth_guard_1.authGuard, admin_guard_1.adminGuard] },
    { path: 'admin/users', component: users_page_component_1.UsersPageComponent, canActivate: [auth_guard_1.authGuard, admin_guard_1.adminGuard] },
    { path: 'admin/users/:searchTerm', component: users_page_component_1.UsersPageComponent, canActivate: [auth_guard_1.authGuard, admin_guard_1.adminGuard] },
    { path: 'admin/editUser/:userId', component: user_edit_page_component_1.UserEditPageComponent, canActivate: [auth_guard_1.authGuard, admin_guard_1.adminGuard] }
];
let AppRoutingModule = (() => {
    let _classDecorators = [(0, core_1.NgModule)({
            imports: [router_1.RouterModule.forRoot(routes)],
            exports: [router_1.RouterModule],
        })];
    let _classDescriptor;
    let _classExtraInitializers = [];
    let _classThis;
    var AppRoutingModule = _classThis = class {
    };
    __setFunctionName(_classThis, "AppRoutingModule");
    (() => {
        const _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(null) : void 0;
        __esDecorate(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name, metadata: _metadata }, null, _classExtraInitializers);
        AppRoutingModule = _classThis = _classDescriptor.value;
        if (_metadata) Object.defineProperty(_classThis, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        __runInitializers(_classThis, _classExtraInitializers);
    })();
    return AppRoutingModule = _classThis;
})();
exports.AppRoutingModule = AppRoutingModule;
