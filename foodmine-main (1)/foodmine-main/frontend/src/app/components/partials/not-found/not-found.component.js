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
exports.NotFoundComponent = void 0;
const core_1 = require("@angular/core");
let NotFoundComponent = (() => {
    let _classDecorators = [(0, core_1.Component)({
            selector: 'app-not-found',
            templateUrl: './not-found.component.html',
            styleUrls: ['./not-found.component.css']
        })];
    let _classDescriptor;
    let _classExtraInitializers = [];
    let _classThis;
    let _visible_decorators;
    let _visible_initializers = [];
    let _visible_extraInitializers = [];
    let _notFoundMessage_decorators;
    let _notFoundMessage_initializers = [];
    let _notFoundMessage_extraInitializers = [];
    let _resetLinkText_decorators;
    let _resetLinkText_initializers = [];
    let _resetLinkText_extraInitializers = [];
    let _resetLinkRoute_decorators;
    let _resetLinkRoute_initializers = [];
    let _resetLinkRoute_extraInitializers = [];
    var NotFoundComponent = _classThis = class {
        constructor() {
            this.visible = __runInitializers(this, _visible_initializers, false); // Or can use *ngIf
            this.notFoundMessage = (__runInitializers(this, _visible_extraInitializers), __runInitializers(this, _notFoundMessage_initializers, "Nothing Found!"));
            this.resetLinkText = (__runInitializers(this, _notFoundMessage_extraInitializers), __runInitializers(this, _resetLinkText_initializers, "Reset"));
            this.resetLinkRoute = (__runInitializers(this, _resetLinkText_extraInitializers), __runInitializers(this, _resetLinkRoute_initializers, "/"));
            __runInitializers(this, _resetLinkRoute_extraInitializers);
        }
    };
    __setFunctionName(_classThis, "NotFoundComponent");
    (() => {
        const _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(null) : void 0;
        _visible_decorators = [(0, core_1.Input)()];
        _notFoundMessage_decorators = [(0, core_1.Input)()];
        _resetLinkText_decorators = [(0, core_1.Input)()];
        _resetLinkRoute_decorators = [(0, core_1.Input)()];
        __esDecorate(null, null, _visible_decorators, { kind: "field", name: "visible", static: false, private: false, access: { has: obj => "visible" in obj, get: obj => obj.visible, set: (obj, value) => { obj.visible = value; } }, metadata: _metadata }, _visible_initializers, _visible_extraInitializers);
        __esDecorate(null, null, _notFoundMessage_decorators, { kind: "field", name: "notFoundMessage", static: false, private: false, access: { has: obj => "notFoundMessage" in obj, get: obj => obj.notFoundMessage, set: (obj, value) => { obj.notFoundMessage = value; } }, metadata: _metadata }, _notFoundMessage_initializers, _notFoundMessage_extraInitializers);
        __esDecorate(null, null, _resetLinkText_decorators, { kind: "field", name: "resetLinkText", static: false, private: false, access: { has: obj => "resetLinkText" in obj, get: obj => obj.resetLinkText, set: (obj, value) => { obj.resetLinkText = value; } }, metadata: _metadata }, _resetLinkText_initializers, _resetLinkText_extraInitializers);
        __esDecorate(null, null, _resetLinkRoute_decorators, { kind: "field", name: "resetLinkRoute", static: false, private: false, access: { has: obj => "resetLinkRoute" in obj, get: obj => obj.resetLinkRoute, set: (obj, value) => { obj.resetLinkRoute = value; } }, metadata: _metadata }, _resetLinkRoute_initializers, _resetLinkRoute_extraInitializers);
        __esDecorate(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name, metadata: _metadata }, null, _classExtraInitializers);
        NotFoundComponent = _classThis = _classDescriptor.value;
        if (_metadata) Object.defineProperty(_classThis, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        __runInitializers(_classThis, _classExtraInitializers);
    })();
    return NotFoundComponent = _classThis;
})();
exports.NotFoundComponent = NotFoundComponent;
