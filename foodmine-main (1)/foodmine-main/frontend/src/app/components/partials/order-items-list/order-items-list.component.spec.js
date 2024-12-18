"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const testing_1 = require("@angular/core/testing");
const order_items_list_component_1 = require("./order-items-list.component");
describe('OrderItemsListComponent', () => {
    let component;
    let fixture;
    beforeEach(() => {
        testing_1.TestBed.configureTestingModule({
            declarations: [order_items_list_component_1.OrderItemsListComponent]
        });
        fixture = testing_1.TestBed.createComponent(order_items_list_component_1.OrderItemsListComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
