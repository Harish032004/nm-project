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
exports.InputValidationComponent = void 0;
const core_1 = require("@angular/core");
const VALIDATORS_MESSAGES = {
    required: 'Should not be empty',
    email: 'Email is not valid',
    minlength: 'Field is too short',
    notMatch: 'Password and Confirm Password does not match'
};
let InputValidationComponent = (() => {
    let _classDecorators = [(0, core_1.Component)({
            selector: 'input-validation',
            templateUrl: './input-validation.component.html',
            styleUrls: ['./input-validation.component.css']
        })];
    let _classDescriptor;
    let _classExtraInitializers = [];
    let _classThis;
    let _control_decorators;
    let _control_initializers = [];
    let _control_extraInitializers = [];
    let _showErrorsWhen_decorators;
    let _showErrorsWhen_initializers = [];
    let _showErrorsWhen_extraInitializers = [];
    var InputValidationComponent = _classThis = class {
        checkValidation() {
            const errors = this.control.errors;
            if (!errors) {
                this.errorMessages = [];
                return;
            }
            const errorKeys = Object.keys(errors);
            //['required', 'email']
            this.errorMessages = errorKeys.map((key) => VALIDATORS_MESSAGES[key]);
        }
        constructor() {
            this.control = __runInitializers(this, _control_initializers, void 0);
            this.showErrorsWhen = (__runInitializers(this, _control_extraInitializers), __runInitializers(this, _showErrorsWhen_initializers, true));
            this.errorMessages = (__runInitializers(this, _showErrorsWhen_extraInitializers), []);
        }
        ngOnInit() {
            this.control.statusChanges.subscribe(() => {
                this.checkValidation();
            });
            this.control.valueChanges.subscribe(() => {
                this.checkValidation();
            });
        }
        ngOnChanges(changes) {
            this.checkValidation();
        }
    };
    __setFunctionName(_classThis, "InputValidationComponent");
    (() => {
        const _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(null) : void 0;
        _control_decorators = [(0, core_1.Input)()];
        _showErrorsWhen_decorators = [(0, core_1.Input)()];
        __esDecorate(null, null, _control_decorators, { kind: "field", name: "control", static: false, private: false, access: { has: obj => "control" in obj, get: obj => obj.control, set: (obj, value) => { obj.control = value; } }, metadata: _metadata }, _control_initializers, _control_extraInitializers);
        __esDecorate(null, null, _showErrorsWhen_decorators, { kind: "field", name: "showErrorsWhen", static: false, private: false, access: { has: obj => "showErrorsWhen" in obj, get: obj => obj.showErrorsWhen, set: (obj, value) => { obj.showErrorsWhen = value; } }, metadata: _metadata }, _showErrorsWhen_initializers, _showErrorsWhen_extraInitializers);
        __esDecorate(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name, metadata: _metadata }, null, _classExtraInitializers);
        InputValidationComponent = _classThis = _classDescriptor.value;
        if (_metadata) Object.defineProperty(_classThis, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        __runInitializers(_classThis, _classExtraInitializers);
    })();
    return InputValidationComponent = _classThis;
})();
exports.InputValidationComponent = InputValidationComponent;
