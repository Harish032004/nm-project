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
exports.TextInputComponent = void 0;
const core_1 = require("@angular/core");
let TextInputComponent = (() => {
    let _classDecorators = [(0, core_1.Component)({
            selector: 'text-input',
            templateUrl: './text-input.component.html',
            styleUrls: ['./text-input.component.css']
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
    let _label_decorators;
    let _label_initializers = [];
    let _label_extraInitializers = [];
    let _type_decorators;
    let _type_initializers = [];
    let _type_extraInitializers = [];
    var TextInputComponent = _classThis = class {
        get formControl() {
            return this.control;
        }
        constructor() {
            this.control = __runInitializers(this, _control_initializers, void 0);
            this.showErrorsWhen = (__runInitializers(this, _control_extraInitializers), __runInitializers(this, _showErrorsWhen_initializers, true));
            this.label = (__runInitializers(this, _showErrorsWhen_extraInitializers), __runInitializers(this, _label_initializers, void 0));
            this.type = (__runInitializers(this, _label_extraInitializers), __runInitializers(this, _type_initializers, 'text'));
            __runInitializers(this, _type_extraInitializers);
        }
    };
    __setFunctionName(_classThis, "TextInputComponent");
    (() => {
        const _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(null) : void 0;
        _control_decorators = [(0, core_1.Input)()];
        _showErrorsWhen_decorators = [(0, core_1.Input)()];
        _label_decorators = [(0, core_1.Input)()];
        _type_decorators = [(0, core_1.Input)()];
        __esDecorate(null, null, _control_decorators, { kind: "field", name: "control", static: false, private: false, access: { has: obj => "control" in obj, get: obj => obj.control, set: (obj, value) => { obj.control = value; } }, metadata: _metadata }, _control_initializers, _control_extraInitializers);
        __esDecorate(null, null, _showErrorsWhen_decorators, { kind: "field", name: "showErrorsWhen", static: false, private: false, access: { has: obj => "showErrorsWhen" in obj, get: obj => obj.showErrorsWhen, set: (obj, value) => { obj.showErrorsWhen = value; } }, metadata: _metadata }, _showErrorsWhen_initializers, _showErrorsWhen_extraInitializers);
        __esDecorate(null, null, _label_decorators, { kind: "field", name: "label", static: false, private: false, access: { has: obj => "label" in obj, get: obj => obj.label, set: (obj, value) => { obj.label = value; } }, metadata: _metadata }, _label_initializers, _label_extraInitializers);
        __esDecorate(null, null, _type_decorators, { kind: "field", name: "type", static: false, private: false, access: { has: obj => "type" in obj, get: obj => obj.type, set: (obj, value) => { obj.type = value; } }, metadata: _metadata }, _type_initializers, _type_extraInitializers);
        __esDecorate(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name, metadata: _metadata }, null, _classExtraInitializers);
        TextInputComponent = _classThis = _classDescriptor.value;
        if (_metadata) Object.defineProperty(_classThis, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        __runInitializers(_classThis, _classExtraInitializers);
    })();
    return TextInputComponent = _classThis;
})();
exports.TextInputComponent = TextInputComponent;
