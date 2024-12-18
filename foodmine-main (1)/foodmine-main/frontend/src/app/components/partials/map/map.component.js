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
exports.MapComponent = void 0;
const core_1 = require("@angular/core");
const leaflet_1 = require("leaflet");
let MapComponent = (() => {
    let _classDecorators = [(0, core_1.Component)({
            selector: 'map',
            templateUrl: './map.component.html',
            styleUrls: ['./map.component.css']
        })];
    let _classDescriptor;
    let _classExtraInitializers = [];
    let _classThis;
    let _order_decorators;
    let _order_initializers = [];
    let _order_extraInitializers = [];
    let _readonly_decorators;
    let _readonly_initializers = [];
    let _readonly_extraInitializers = [];
    let _mapRef_decorators;
    let _mapRef_initializers = [];
    let _mapRef_extraInitializers = [];
    var MapComponent = _classThis = class {
        constructor(locationService) {
            this.locationService = locationService;
            this.order = __runInitializers(this, _order_initializers, void 0);
            this.readonly = (__runInitializers(this, _order_extraInitializers), __runInitializers(this, _readonly_initializers, false));
            this.MARKER_ZOOM_LEVEL = (__runInitializers(this, _readonly_extraInitializers), 16);
            this.MARKER_ICON = (0, leaflet_1.icon)({
                iconUrl: 'https://res.cloudinary.com/foodmine/image/upload/v1638842791/map/marker_kbua9q.png',
                iconSize: [42, 42],
                iconAnchor: [21, 42]
            });
            this.DEFAULT_LATLNG = [13.75, 21.62];
            this.mapRef = __runInitializers(this, _mapRef_initializers, void 0);
            this.map = __runInitializers(this, _mapRef_extraInitializers);
        }
        ngOnChanges() {
            if (!this.order)
                return;
            this.initializeMap();
            if (this.readonly && this.addressLatLng) {
                this.showLocationOnReadonlyMode();
            }
        }
        showLocationOnReadonlyMode() {
            var _a, _b;
            const m = this.map;
            this.setMarker(this.addressLatLng);
            m.setView(this.addressLatLng, this.MARKER_ZOOM_LEVEL);
            m.dragging.disable();
            m.touchZoom.disable();
            m.doubleClickZoom.disable();
            m.scrollWheelZoom.disable();
            m.boxZoom.disable();
            m.keyboard.disable();
            m.off('click');
            (_a = m.tap) === null || _a === void 0 ? void 0 : _a.disable();
            (_b = this.currentMarker.dragging) === null || _b === void 0 ? void 0 : _b.disable();
        }
        initializeMap() {
            if (this.map)
                return;
            this.map = (0, leaflet_1.map)(this.mapRef.nativeElement, {
                attributionControl: false
            }).setView(this.DEFAULT_LATLNG, 1);
            (0, leaflet_1.tileLayer)('https://{s}.tile.osm.org/{z}/{x}/{y}.png').addTo(this.map);
            this.map.on('click', (e) => {
                this.setMarker(e.latlng);
            });
        }
        findMyLocation() {
            this.locationService.getCurrentLocation().subscribe({
                next: (latlng) => {
                    this.map.setView(latlng, this.MARKER_ZOOM_LEVEL);
                    this.setMarker(latlng);
                }
            });
        }
        setMarker(latlng) {
            this.addressLatLng = latlng;
            if (this.currentMarker) {
                this.currentMarker.setLatLng(latlng);
                return;
            }
            this.currentMarker = (0, leaflet_1.marker)(latlng, {
                draggable: true,
                icon: this.MARKER_ICON
            }).addTo(this.map);
            this.currentMarker.on('dragend', () => {
                this.addressLatLng = this.currentMarker.getLatLng();
            });
        }
        set addressLatLng(latlng) {
            if (!latlng.lat.toFixed)
                return;
            latlng.lat = parseFloat(latlng.lat.toFixed(8));
            latlng.lng = parseFloat(latlng.lng.toFixed(8));
            this.order.addressLatLng = latlng;
            console.log(this.order.addressLatLng);
        }
        get addressLatLng() {
            return this.order.addressLatLng;
        }
    };
    __setFunctionName(_classThis, "MapComponent");
    (() => {
        const _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(null) : void 0;
        _order_decorators = [(0, core_1.Input)()];
        _readonly_decorators = [(0, core_1.Input)()];
        _mapRef_decorators = [(0, core_1.ViewChild)('map', { static: true })];
        __esDecorate(null, null, _order_decorators, { kind: "field", name: "order", static: false, private: false, access: { has: obj => "order" in obj, get: obj => obj.order, set: (obj, value) => { obj.order = value; } }, metadata: _metadata }, _order_initializers, _order_extraInitializers);
        __esDecorate(null, null, _readonly_decorators, { kind: "field", name: "readonly", static: false, private: false, access: { has: obj => "readonly" in obj, get: obj => obj.readonly, set: (obj, value) => { obj.readonly = value; } }, metadata: _metadata }, _readonly_initializers, _readonly_extraInitializers);
        __esDecorate(null, null, _mapRef_decorators, { kind: "field", name: "mapRef", static: false, private: false, access: { has: obj => "mapRef" in obj, get: obj => obj.mapRef, set: (obj, value) => { obj.mapRef = value; } }, metadata: _metadata }, _mapRef_initializers, _mapRef_extraInitializers);
        __esDecorate(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name, metadata: _metadata }, null, _classExtraInitializers);
        MapComponent = _classThis = _classDescriptor.value;
        if (_metadata) Object.defineProperty(_classThis, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        __runInitializers(_classThis, _classExtraInitializers);
    })();
    return MapComponent = _classThis;
})();
exports.MapComponent = MapComponent;
