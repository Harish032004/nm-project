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
exports.AppModule = void 0;
const core_1 = require("@angular/core");
const platform_browser_1 = require("@angular/platform-browser");
const http_1 = require("@angular/common/http");
const forms_1 = require("@angular/forms");
const ngx_toastr_1 = require("ngx-toastr");
const animations_1 = require("@angular/platform-browser/animations");
const app_routing_module_1 = require("./app-routing.module");
const app_component_1 = require("./app.component");
const header_component_1 = require("./components/partials/header/header.component");
const home_component_1 = require("./components/pages/home/home.component");
const star_rating_component_1 = require("./components/partials/star-rating/star-rating.component");
const search_component_1 = require("./components/partials/search/search.component");
const food_page_component_1 = require("./components/pages/food-page/food-page.component");
const tags_component_1 = require("./components/partials/tags/tags.component");
const cart_page_component_1 = require("./components/pages/cart-page/cart-page.component");
const title_component_1 = require("./components/partials/title/title.component");
const not_found_component_1 = require("./components/partials/not-found/not-found.component");
const login_page_component_1 = require("./components/pages/login-page/login-page.component");
const input_container_component_1 = require("./components/partials/input-container/input-container.component");
const input_validation_component_1 = require("./components/partials/input-validation/input-validation.component");
const text_input_component_1 = require("./components/partials/text-input/text-input.component");
const default_button_component_1 = require("./components/partials/default-button/default-button.component");
const register_page_component_1 = require("./components/pages/register-page/register-page.component");
const loading_component_1 = require("./components/partials/loading/loading.component");
const loading_interceptor_1 = require("./shared/interceptors/loading.interceptor");
const checkout_page_component_1 = require("./components/pages/checkout-page/checkout-page.component");
const order_items_list_component_1 = require("./components/partials/order-items-list/order-items-list.component");
const map_component_1 = require("./components/partials/map/map.component");
const auth_interceptor_1 = require("./auth/auth.interceptor");
const payment_page_component_1 = require("./components/pages/payment-page/payment-page.component");
const paypal_button_component_1 = require("./components/partials/paypal-button/paypal-button.component");
const order_track_page_component_1 = require("./components/pages/order-track-page/order-track-page.component");
const profile_page_component_1 = require("./components/pages/profile-page/profile-page.component");
const change_password_component_1 = require("./components/partials/change-password/change-password.component");
const orders_page_component_1 = require("./components/pages/orders-page/orders-page.component");
const dashboard_component_1 = require("./components/pages/dashboard/dashboard.component");
const foods_admin_page_component_1 = require("./components/pages/foods-admin-page/foods-admin-page.component");
const food_edit_page_component_1 = require("./components/pages/food-edit-page/food-edit-page.component");
const users_page_component_1 = require("./components/pages/users-page/users-page.component");
const user_edit_page_component_1 = require("./components/pages/user-edit-page/user-edit-page.component");
let AppModule = (() => {
    let _classDecorators = [(0, core_1.NgModule)({
            declarations: [
                app_component_1.AppComponent,
                header_component_1.HeaderComponent,
                home_component_1.HomeComponent,
                star_rating_component_1.StarRatingComponent,
                search_component_1.SearchComponent,
                food_page_component_1.FoodPageComponent,
                tags_component_1.TagsComponent,
                cart_page_component_1.CartPageComponent,
                title_component_1.TitleComponent,
                not_found_component_1.NotFoundComponent,
                login_page_component_1.LoginPageComponent,
                input_container_component_1.InputContainerComponent,
                input_validation_component_1.InputValidationComponent,
                text_input_component_1.TextInputComponent,
                default_button_component_1.DefaultButtonComponent,
                register_page_component_1.RegisterPageComponent,
                loading_component_1.LoadingComponent,
                checkout_page_component_1.CheckoutPageComponent,
                order_items_list_component_1.OrderItemsListComponent,
                map_component_1.MapComponent,
                payment_page_component_1.PaymentPageComponent,
                paypal_button_component_1.PaypalButtonComponent,
                order_track_page_component_1.OrderTrackPageComponent,
                profile_page_component_1.ProfilePageComponent,
                change_password_component_1.ChangePasswordComponent,
                orders_page_component_1.OrdersPageComponent,
                dashboard_component_1.DashboardComponent,
                foods_admin_page_component_1.FoodsAdminPageComponent,
                food_edit_page_component_1.FoodEditPageComponent,
                users_page_component_1.UsersPageComponent,
                user_edit_page_component_1.UserEditPageComponent
            ],
            imports: [
                platform_browser_1.BrowserModule,
                animations_1.BrowserAnimationsModule,
                app_routing_module_1.AppRoutingModule,
                http_1.HttpClientModule,
                forms_1.ReactiveFormsModule,
                ngx_toastr_1.ToastrModule.forRoot({
                    timeOut: 3000,
                    positionClass: 'toast-bottom-right',
                    newestOnTop: false
                })
            ],
            providers: [
                { provide: http_1.HTTP_INTERCEPTORS, useClass: auth_interceptor_1.AuthInterceptor, multi: true },
                { provide: http_1.HTTP_INTERCEPTORS, useClass: loading_interceptor_1.LoadingInterceptor, multi: true }
            ],
            bootstrap: [app_component_1.AppComponent]
        })];
    let _classDescriptor;
    let _classExtraInitializers = [];
    let _classThis;
    var AppModule = _classThis = class {
    };
    __setFunctionName(_classThis, "AppModule");
    (() => {
        const _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(null) : void 0;
        __esDecorate(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name, metadata: _metadata }, null, _classExtraInitializers);
        AppModule = _classThis = _classDescriptor.value;
        if (_metadata) Object.defineProperty(_classThis, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        __runInitializers(_classThis, _classExtraInitializers);
    })();
    return AppModule = _classThis;
})();
exports.AppModule = AppModule;
