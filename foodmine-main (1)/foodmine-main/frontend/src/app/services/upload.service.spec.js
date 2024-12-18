"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const testing_1 = require("@angular/core/testing");
const upload_service_1 = require("./upload.service");
describe('UploadService', () => {
    let service;
    beforeEach(() => {
        testing_1.TestBed.configureTestingModule({});
        service = testing_1.TestBed.inject(upload_service_1.UploadService);
    });
    it('should be created', () => {
        expect(service).toBeTruthy();
    });
});
