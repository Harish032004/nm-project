"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const testing_1 = require("@angular/core/testing");
const loading_interceptor_1 = require("./loading.interceptor");
describe('LoadingInterceptor', () => {
    beforeEach(() => testing_1.TestBed.configureTestingModule({
        providers: [
            loading_interceptor_1.LoadingInterceptor
        ]
    }));
    it('should be created', () => {
        const interceptor = testing_1.TestBed.inject(loading_interceptor_1.LoadingInterceptor);
        expect(interceptor).toBeTruthy();
    });
});
