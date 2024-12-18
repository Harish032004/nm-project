"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const testing_1 = require("@angular/core/testing");
const register_page_component_1 = require("./register-page.component");
describe('RegisterPageComponent', () => {
    let component;
    let fixture;
    beforeEach(() => {
        testing_1.TestBed.configureTestingModule({
            declarations: [register_page_component_1.RegisterPageComponent]
        });
        fixture = testing_1.TestBed.createComponent(register_page_component_1.RegisterPageComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
