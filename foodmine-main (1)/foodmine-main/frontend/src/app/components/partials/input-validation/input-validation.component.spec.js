"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const testing_1 = require("@angular/core/testing");
const input_validation_component_1 = require("./input-validation.component");
describe('InputValidationComponent', () => {
    let component;
    let fixture;
    beforeEach(() => {
        testing_1.TestBed.configureTestingModule({
            declarations: [input_validation_component_1.InputValidationComponent]
        });
        fixture = testing_1.TestBed.createComponent(input_validation_component_1.InputValidationComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
