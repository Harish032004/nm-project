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
exports.SearchComponent = void 0;
const core_1 = require("@angular/core");
let SearchComponent = (() => {
    let _classDecorators = [(0, core_1.Component)({
            selector: 'app-search',
            templateUrl: './search.component.html',
            styleUrls: ['./search.component.css']
        })];
    let _classDescriptor;
    let _classExtraInitializers = [];
    let _classThis;
    let _searchRoute_decorators;
    let _searchRoute_initializers = [];
    let _searchRoute_extraInitializers = [];
    let _defaultRoute_decorators;
    let _defaultRoute_initializers = [];
    let _defaultRoute_extraInitializers = [];
    let _placeholder_decorators;
    let _placeholder_initializers = [];
    let _placeholder_extraInitializers = [];
    var SearchComponent = _classThis = class {
        constructor(activatedRoute, router) {
            this.router = router;
            this.searchRoute = __runInitializers(this, _searchRoute_initializers, '/search/');
            this.defaultRoute = (__runInitializers(this, _searchRoute_extraInitializers), __runInitializers(this, _defaultRoute_initializers, '/'));
            this.placeholder = (__runInitializers(this, _defaultRoute_extraInitializers), __runInitializers(this, _placeholder_initializers, 'Search Food Mine!'));
            this.searchTerm = (__runInitializers(this, _placeholder_extraInitializers), '');
            activatedRoute.params.subscribe((params) => {
                if (params.searchTerm) {
                    this.searchTerm = params.searchTerm;
                }
            });
        }
        search(term) {
            if (term) {
                // this.router.navigateByUrl('/search/' + term);
                this.router.navigateByUrl(this.searchRoute + term);
            }
            else {
                // this.router.navigateByUrl('/');
                this.router.navigateByUrl(this.defaultRoute);
            }
        }
    };
    __setFunctionName(_classThis, "SearchComponent");
    (() => {
        const _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(null) : void 0;
        _searchRoute_decorators = [(0, core_1.Input)()];
        _defaultRoute_decorators = [(0, core_1.Input)()];
        _placeholder_decorators = [(0, core_1.Input)()];
        __esDecorate(null, null, _searchRoute_decorators, { kind: "field", name: "searchRoute", static: false, private: false, access: { has: obj => "searchRoute" in obj, get: obj => obj.searchRoute, set: (obj, value) => { obj.searchRoute = value; } }, metadata: _metadata }, _searchRoute_initializers, _searchRoute_extraInitializers);
        __esDecorate(null, null, _defaultRoute_decorators, { kind: "field", name: "defaultRoute", static: false, private: false, access: { has: obj => "defaultRoute" in obj, get: obj => obj.defaultRoute, set: (obj, value) => { obj.defaultRoute = value; } }, metadata: _metadata }, _defaultRoute_initializers, _defaultRoute_extraInitializers);
        __esDecorate(null, null, _placeholder_decorators, { kind: "field", name: "placeholder", static: false, private: false, access: { has: obj => "placeholder" in obj, get: obj => obj.placeholder, set: (obj, value) => { obj.placeholder = value; } }, metadata: _metadata }, _placeholder_initializers, _placeholder_extraInitializers);
        __esDecorate(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name, metadata: _metadata }, null, _classExtraInitializers);
        SearchComponent = _classThis = _classDescriptor.value;
        if (_metadata) Object.defineProperty(_classThis, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        __runInitializers(_classThis, _classExtraInitializers);
    })();
    return SearchComponent = _classThis;
})();
exports.SearchComponent = SearchComponent;
