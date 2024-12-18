"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const testing_1 = require("@angular/core/testing");
const cart_page_component_1 = require("./cart-page.component");
describe('CartPageComponent', () => {
    let component;
    let fixture;
    beforeEach(() => {
        testing_1.TestBed.configureTestingModule({
            declarations: [cart_page_component_1.CartPageComponent]
        });
        fixture = testing_1.TestBed.createComponent(cart_page_component_1.CartPageComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
