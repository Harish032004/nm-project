"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const testing_1 = require("@angular/core/testing");
const admin_guard_1 = require("./admin.guard");
describe('adminGuard', () => {
    const executeGuard = (...guardParameters) => testing_1.TestBed.runInInjectionContext(() => (0, admin_guard_1.adminGuard)(...guardParameters));
    beforeEach(() => {
        testing_1.TestBed.configureTestingModule({});
    });
    it('should be created', () => {
        expect(executeGuard).toBeTruthy();
    });
});
