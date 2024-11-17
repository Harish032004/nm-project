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
exports.LoginPageComponent = void 0;
const core_1 = require("@angular/core");
const forms_1 = require("@angular/forms");
let LoginPageComponent = (() => {
    let _classDecorators = [(0, core_1.Component)({
            selector: 'app-login-page',
            templateUrl: './login-page.component.html',
            styleUrls: ['./login-page.component.css'],
        })];
    let _classDescriptor;
    let _classExtraInitializers = [];
    let _classThis;
    var LoginPageComponent = _classThis = class {
        // Constructor with dependency injection for UserService, ActivatedRoute, and Router
        constructor(userService, activatedRoute, router) {
            this.userService = userService;
            this.activatedRoute = activatedRoute;
            this.router = router;
            this.isSubmitted = false; //if the form has been submitted
            //returnUrl is a property used to store the URL the user tried to access before being redirected to the login page.
            //This typically happens when a user attempts to access a protected route without being logged in.
            //In the ngOnInit lifecycle hook, the component captures the returnUrl from the query parameters of the current route using activatedRoute.snapshot.queryParams.returnUrl.
            this.returnUrl = '';
            this.loginForm = new forms_1.FormGroup({
                email: new forms_1.FormControl('', [forms_1.Validators.required, forms_1.Validators.email]),
                password: new forms_1.FormControl('', [forms_1.Validators.required]),
            });
        }
        // activatedRoute is a service that helps retrieve information about the current route, including query parameters. 
        ngOnInit() {
            this.returnUrl = this.activatedRoute.snapshot.queryParams.returnUrl;
        }
        submit() {
            this.isSubmitted = true;
            if (this.loginForm.invalid)
                return;
            // alert(`email: ${this.loginForm.value.email} , password: ${this.loginForm.value.password}`);
            // Extract email and password values from the form
            const email = this.loginForm.value.email;
            const password = this.loginForm.value.password;
            // Call the login method of the UserService, passing email and password
            this.userService
                .login({
                email: email,
                password: password,
            })
                .subscribe(() => {
                this.router.navigateByUrl(this.returnUrl); // After successful login, navigate to the stored return URL
            });
        }
    };
    __setFunctionName(_classThis, "LoginPageComponent");
    (() => {
        const _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(null) : void 0;
        __esDecorate(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name, metadata: _metadata }, null, _classExtraInitializers);
        LoginPageComponent = _classThis = _classDescriptor.value;
        if (_metadata) Object.defineProperty(_classThis, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        __runInitializers(_classThis, _classExtraInitializers);
    })();
    return LoginPageComponent = _classThis;
})();
exports.LoginPageComponent = LoginPageComponent;