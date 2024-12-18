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
exports.FoodEditPageComponent = void 0;
const core_1 = require("@angular/core");
const forms_1 = require("@angular/forms");
let FoodEditPageComponent = (() => {
    let _classDecorators = [(0, core_1.Component)({
            selector: 'app-food-edit-page',
            templateUrl: './food-edit-page.component.html',
            styleUrl: './food-edit-page.component.css'
        })];
    let _classDescriptor;
    let _classExtraInitializers = [];
    let _classThis;
    var FoodEditPageComponent = _classThis = class {
        constructor(activatedRoute, foodService, uploadService, toastrService, router) {
            this.activatedRoute = activatedRoute;
            this.foodService = foodService;
            this.uploadService = uploadService;
            this.toastrService = toastrService;
            this.router = router;
            this.isEditMode = true; // Whether the page is in edit mode or not
            // Reactive form for handling the input fields of the food item
            this.foodForm = new forms_1.FormGroup({
                name: new forms_1.FormControl('', [forms_1.Validators.required, forms_1.Validators.minLength(5)]),
                price: new forms_1.FormControl('', [forms_1.Validators.required]),
                tags: new forms_1.FormControl(''),
                origins: new forms_1.FormControl('', [forms_1.Validators.required]),
                cookTime: new forms_1.FormControl('', [forms_1.Validators.required])
            });
            // Indicates whether the form has been submitted or not
            this.isSubmitted = false;
            // Subscribe to route parameters to determine if the component is in edit mode
            this.activatedRoute.params.subscribe(params => {
                if (params.id) {
                    this.foodId = params.id;
                    this.isEditMode = true;
                    this.foodService.getFoodById(params.id).subscribe(food => {
                        if (!food)
                            return;
                        this.imageUrl = food.imageUrl;
                        // Convert the array to a comma-separated string
                        const tagsString = food.tags ? food.tags.join(',') : '';
                        const originsString = food.origins ? food.origins.join(',') : '';
                        const foodData = {
                            name: food.name,
                            price: food.price.toString(), // Convert number to string
                            tags: tagsString,
                            origins: originsString,
                            cookTime: food.cookTime,
                        };
                        // Populate the form with fetched food data
                        this.foodForm.patchValue(foodData);
                    });
                }
                else {
                    // If no ID is present, set the component to add mode
                    this.isEditMode = false;
                }
            });
        }
        upload(event) {
            this.uploadService.uploadImage(event).subscribe((data) => {
                this.imageUrl = data.imageUrl;
            });
        }
        // Method to handle form submission
        submit(foodData) {
            this.isSubmitted = true;
            // Check if the form is invalid
            if (this.foodForm.invalid) {
                this.toastrService.error('Please fill in all required fields!');
                return;
            }
            // Check if the image url is present
            if (!this.imageUrl) {
                this.toastrService.error('Please select an image!');
                return;
            }
            // Prepare the food object with image URL and ID
            const food = Object.assign(Object.assign({}, foodData), { imageUrl: this.imageUrl, id: this.foodId });
            if (this.isEditMode) {
                this.foodService.update(food).subscribe(() => {
                    this.toastrService.success(`Food "${food.name}" updated successfully!`);
                });
            }
            else {
                this.foodService.add(food).subscribe((food) => {
                    this.toastrService.success(`Food "${food.name}" added successfully!`);
                    this.router.navigateByUrl('/admin/editFood/' + food.id, { replaceUrl: true });
                    /*{ replaceUrl: true } is an option in Angular's router navigation that,
                      when set to true, replaces the current URL in the browser's history with the new URL.
                      This can be useful when you want to navigate to a new page without leaving a history entry
                      for the previous page, making the browser's "back" button skip the intermediate state.
                    */
                });
            }
        }
    };
    __setFunctionName(_classThis, "FoodEditPageComponent");
    (() => {
        const _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(null) : void 0;
        __esDecorate(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name, metadata: _metadata }, null, _classExtraInitializers);
        FoodEditPageComponent = _classThis = _classDescriptor.value;
        if (_metadata) Object.defineProperty(_classThis, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        __runInitializers(_classThis, _classExtraInitializers);
    })();
    return FoodEditPageComponent = _classThis;
})();
exports.FoodEditPageComponent = FoodEditPageComponent;
