"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const testing_1 = require("@angular/core/testing");
const location_service_1 = require("./location.service");
describe('LocationService', () => {
    let service;
    beforeEach(() => {
        testing_1.TestBed.configureTestingModule({});
        service = testing_1.TestBed.inject(location_service_1.LocationService);
    });
    it('should be created', () => {
        expect(service).toBeTruthy();
    });
});
