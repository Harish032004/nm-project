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
exports.UserEditPageComponent = void 0;
const core_1 = require("@angular/core");
const forms_1 = require("@angular/forms");
let UserEditPageComponent = (() => {
    let _classDecorators = [(0, core_1.Component)({
            selector: 'app-user-edit-page',
            templateUrl: './user-edit-page.component.html',
            styleUrl: './user-edit-page.component.css'
        })];
    let _classDescriptor;
    let _classExtraInitializers = [];
    let _classThis;
    var UserEditPageComponent = _classThis = class {
        constructor(activatedRoute, userService, toastrService, router) {
            this.userService = userService;
            this.toastrService = toastrService;
            this.router = router;
            this.userForm = new forms_1.FormGroup({
                name: new forms_1.FormControl('', [forms_1.Validators.required, forms_1.Validators.minLength(5)]),
                email: new forms_1.FormControl('', [forms_1.Validators.required, forms_1.Validators.email]),
                address: new forms_1.FormControl('', [forms_1.Validators.required, forms_1.Validators.minLength(5)]),
                isAdmin: new forms_1.FormControl(false)
            });
            this.isSubmitted = false;
            activatedRoute.params.subscribe((params) => {
                this.userId = params.userId;
                this.isEditMode = !!this.userId;
                if (this.isEditMode) {
                    this.userService.getById(this.userId).subscribe((user) => {
                        this.userForm.patchValue(user);
                    });
                }
            });
        }
        submit() {
            this.isSubmitted = true;
            if (this.userForm.invalid) {
                return;
            }
            if (this.isEditMode) {
                this.userService.updateUser(this.userId, this.userForm.value).subscribe(() => {
                    this.toastrService.success('User updated successfully!');
                    this.router.navigate(['/admin/users']);
                });
            }
            else {
                //
            }
        }
    };
    __setFunctionName(_classThis, "UserEditPageComponent");
    (() => {
        const _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(null) : void 0;
        __esDecorate(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name, metadata: _metadata }, null, _classExtraInitializers);
        UserEditPageComponent = _classThis = _classDescriptor.value;
        if (_metadata) Object.defineProperty(_classThis, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        __runInitializers(_classThis, _classExtraInitializers);
    })();
    return UserEditPageComponent = _classThis;
})();
exports.UserEditPageComponent = UserEditPageComponent;
