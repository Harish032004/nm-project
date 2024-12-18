"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const testing_1 = require("@angular/core/testing");
const loading_service_1 = require("./loading.service");
describe('LoadingService', () => {
    let service;
    beforeEach(() => {
        testing_1.TestBed.configureTestingModule({});
        service = testing_1.TestBed.inject(loading_service_1.LoadingService);
    });
    it('should be created', () => {
        expect(service).toBeTruthy();
    });
});
