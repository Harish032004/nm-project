"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const testing_1 = require("@angular/core/testing");
const food_page_component_1 = require("./food-page.component");
describe('FoodPageComponent', () => {
    let component;
    let fixture;
    beforeEach(() => {
        testing_1.TestBed.configureTestingModule({
            declarations: [food_page_component_1.FoodPageComponent]
        });
        fixture = testing_1.TestBed.createComponent(food_page_component_1.FoodPageComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
