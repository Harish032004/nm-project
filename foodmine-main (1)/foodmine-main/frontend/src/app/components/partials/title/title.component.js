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
exports.TitleComponent = void 0;
const core_1 = require("@angular/core");
let TitleComponent = (() => {
    let _classDecorators = [(0, core_1.Component)({
            selector: 'app-title',
            templateUrl: './title.component.html',
            styleUrls: ['./title.component.css']
        })];
    let _classDescriptor;
    let _classExtraInitializers = [];
    let _classThis;
    let _title_decorators;
    let _title_initializers = [];
    let _title_extraInitializers = [];
    let _margin_decorators;
    let _margin_initializers = [];
    let _margin_extraInitializers = [];
    let _fontSize_decorators;
    let _fontSize_initializers = [];
    let _fontSize_extraInitializers = [];
    var TitleComponent = _classThis = class {
        constructor() {
            this.title = __runInitializers(this, _title_initializers, void 0);
            this.margin = (__runInitializers(this, _title_extraInitializers), __runInitializers(this, _margin_initializers, '1rem 0 1rem 0.2rem'));
            this.fontSize = (__runInitializers(this, _margin_extraInitializers), __runInitializers(this, _fontSize_initializers, '1.7rem'));
            __runInitializers(this, _fontSize_extraInitializers);
        }
    };
    __setFunctionName(_classThis, "TitleComponent");
    (() => {
        const _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(null) : void 0;
        _title_decorators = [(0, core_1.Input)()];
        _margin_decorators = [(0, core_1.Input)()];
        _fontSize_decorators = [(0, core_1.Input)()];
        __esDecorate(null, null, _title_decorators, { kind: "field", name: "title", static: false, private: false, access: { has: obj => "title" in obj, get: obj => obj.title, set: (obj, value) => { obj.title = value; } }, metadata: _metadata }, _title_initializers, _title_extraInitializers);
        __esDecorate(null, null, _margin_decorators, { kind: "field", name: "margin", static: false, private: false, access: { has: obj => "margin" in obj, get: obj => obj.margin, set: (obj, value) => { obj.margin = value; } }, metadata: _metadata }, _margin_initializers, _margin_extraInitializers);
        __esDecorate(null, null, _fontSize_decorators, { kind: "field", name: "fontSize", static: false, private: false, access: { has: obj => "fontSize" in obj, get: obj => obj.fontSize, set: (obj, value) => { obj.fontSize = value; } }, metadata: _metadata }, _fontSize_initializers, _fontSize_extraInitializers);
        __esDecorate(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name, metadata: _metadata }, null, _classExtraInitializers);
        TitleComponent = _classThis = _classDescriptor.value;
        if (_metadata) Object.defineProperty(_classThis, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        __runInitializers(_classThis, _classExtraInitializers);
    })();
    return TitleComponent = _classThis;
})();
exports.TitleComponent = TitleComponent;