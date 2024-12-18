"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const testing_1 = require("@angular/core/testing");
const order_service_1 = require("./order.service");
describe('OrderService', () => {
    let service;
    beforeEach(() => {
        testing_1.TestBed.configureTestingModule({});
        service = testing_1.TestBed.inject(order_service_1.OrderService);
    });
    it('should be created', () => {
        expect(service).toBeTruthy();
    });
});
