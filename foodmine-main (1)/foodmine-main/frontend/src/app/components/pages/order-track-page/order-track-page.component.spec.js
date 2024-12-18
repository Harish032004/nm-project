"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const testing_1 = require("@angular/core/testing");
const order_track_page_component_1 = require("./order-track-page.component");
describe('OrderTrackPageComponent', () => {
    let component;
    let fixture;
    beforeEach(() => {
        testing_1.TestBed.configureTestingModule({
            declarations: [order_track_page_component_1.OrderTrackPageComponent]
        });
        fixture = testing_1.TestBed.createComponent(order_track_page_component_1.OrderTrackPageComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
