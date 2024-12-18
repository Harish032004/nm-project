"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const testing_1 = require("@angular/core/testing");
const checkout_page_component_1 = require("./checkout-page.component");
describe('CheckoutPageComponent', () => {
    let component;
    let fixture;
    beforeEach(() => {
        testing_1.TestBed.configureTestingModule({
            declarations: [checkout_page_component_1.CheckoutPageComponent]
        });
        fixture = testing_1.TestBed.createComponent(checkout_page_component_1.CheckoutPageComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
