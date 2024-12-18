"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const testing_1 = require("@angular/core/testing");
const payment_page_component_1 = require("./payment-page.component");
describe('PaymentPageComponent', () => {
    let component;
    let fixture;
    beforeEach(() => {
        testing_1.TestBed.configureTestingModule({
            declarations: [payment_page_component_1.PaymentPageComponent]
        });
        fixture = testing_1.TestBed.createComponent(payment_page_component_1.PaymentPageComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
