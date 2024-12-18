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
exports.DefaultButtonComponent = void 0;
const core_1 = require("@angular/core");
let DefaultButtonComponent = (() => {
    let _classDecorators = [(0, core_1.Component)({
            selector: 'default-button',
            templateUrl: './default-button.component.html',
            styleUrls: ['./default-button.component.css'],
        })];
    let _classDescriptor;
    let _classExtraInitializers = [];
    let _classThis;
    let _type_decorators;
    let _type_initializers = [];
    let _type_extraInitializers = [];
    let _text_decorators;
    let _text_initializers = [];
    let _text_extraInitializers = [];
    let _bgColor_decorators;
    let _bgColor_initializers = [];
    let _bgColor_extraInitializers = [];
    let _color_decorators;
    let _color_initializers = [];
    let _color_extraInitializers = [];
    let _fontSizeRem_decorators;
    let _fontSizeRem_initializers = [];
    let _fontSizeRem_extraInitializers = [];
    let _widthRem_decorators;
    let _widthRem_initializers = [];
    let _widthRem_extraInitializers = [];
    let _onClick_decorators;
    let _onClick_initializers = [];
    let _onClick_extraInitializers = [];
    var DefaultButtonComponent = _classThis = class {
        constructor() {
            this.type = __runInitializers(this, _type_initializers, 'submit');
            this.text = (__runInitializers(this, _type_extraInitializers), __runInitializers(this, _text_initializers, 'Submit'));
            this.bgColor = (__runInitializers(this, _text_extraInitializers), __runInitializers(this, _bgColor_initializers, '#e72929'));
            this.color = (__runInitializers(this, _bgColor_extraInitializers), __runInitializers(this, _color_initializers, 'white'));
            this.fontSizeRem = (__runInitializers(this, _color_extraInitializers), __runInitializers(this, _fontSizeRem_initializers, 1.3));
            this.widthRem = (__runInitializers(this, _fontSizeRem_extraInitializers), __runInitializers(this, _widthRem_initializers, 12));
            this.onClick = (__runInitializers(this, _widthRem_extraInitializers), __runInitializers(this, _onClick_initializers, new core_1.EventEmitter()));
            __runInitializers(this, _onClick_extraInitializers);
        }
    };
    __setFunctionName(_classThis, "DefaultButtonComponent");
    (() => {
        const _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(null) : void 0;
        _type_decorators = [(0, core_1.Input)()];
        _text_decorators = [(0, core_1.Input)()];
        _bgColor_decorators = [(0, core_1.Input)()];
        _color_decorators = [(0, core_1.Input)()];
        _fontSizeRem_decorators = [(0, core_1.Input)()];
        _widthRem_decorators = [(0, core_1.Input)()];
        _onClick_decorators = [(0, core_1.Output)()];
        __esDecorate(null, null, _type_decorators, { kind: "field", name: "type", static: false, private: false, access: { has: obj => "type" in obj, get: obj => obj.type, set: (obj, value) => { obj.type = value; } }, metadata: _metadata }, _type_initializers, _type_extraInitializers);
        __esDecorate(null, null, _text_decorators, { kind: "field", name: "text", static: false, private: false, access: { has: obj => "text" in obj, get: obj => obj.text, set: (obj, value) => { obj.text = value; } }, metadata: _metadata }, _text_initializers, _text_extraInitializers);
        __esDecorate(null, null, _bgColor_decorators, { kind: "field", name: "bgColor", static: false, private: false, access: { has: obj => "bgColor" in obj, get: obj => obj.bgColor, set: (obj, value) => { obj.bgColor = value; } }, metadata: _metadata }, _bgColor_initializers, _bgColor_extraInitializers);
        __esDecorate(null, null, _color_decorators, { kind: "field", name: "color", static: false, private: false, access: { has: obj => "color" in obj, get: obj => obj.color, set: (obj, value) => { obj.color = value; } }, metadata: _metadata }, _color_initializers, _color_extraInitializers);
        __esDecorate(null, null, _fontSizeRem_decorators, { kind: "field", name: "fontSizeRem", static: false, private: false, access: { has: obj => "fontSizeRem" in obj, get: obj => obj.fontSizeRem, set: (obj, value) => { obj.fontSizeRem = value; } }, metadata: _metadata }, _fontSizeRem_initializers, _fontSizeRem_extraInitializers);
        __esDecorate(null, null, _widthRem_decorators, { kind: "field", name: "widthRem", static: false, private: false, access: { has: obj => "widthRem" in obj, get: obj => obj.widthRem, set: (obj, value) => { obj.widthRem = value; } }, metadata: _metadata }, _widthRem_initializers, _widthRem_extraInitializers);
        __esDecorate(null, null, _onClick_decorators, { kind: "field", name: "onClick", static: false, private: false, access: { has: obj => "onClick" in obj, get: obj => obj.onClick, set: (obj, value) => { obj.onClick = value; } }, metadata: _metadata }, _onClick_initializers, _onClick_extraInitializers);
        __esDecorate(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name, metadata: _metadata }, null, _classExtraInitializers);
        DefaultButtonComponent = _classThis = _classDescriptor.value;
        if (_metadata) Object.defineProperty(_classThis, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        __runInitializers(_classThis, _classExtraInitializers);
    })();
    return DefaultButtonComponent = _classThis;
})();
exports.DefaultButtonComponent = DefaultButtonComponent;
