"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const testing_1 = require("@angular/core/testing");
const paypal_button_component_1 = require("./paypal-button.component");
describe('PaypalButtonComponent', () => {
    let component;
    let fixture;
    beforeEach(() => {
        testing_1.TestBed.configureTestingModule({
            declarations: [paypal_button_component_1.PaypalButtonComponent]
        });
        fixture = testing_1.TestBed.createComponent(paypal_button_component_1.PaypalButtonComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
