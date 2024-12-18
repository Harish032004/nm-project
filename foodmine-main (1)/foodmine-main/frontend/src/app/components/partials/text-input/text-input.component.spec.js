"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const testing_1 = require("@angular/core/testing");
const text_input_component_1 = require("./text-input.component");
describe('TextInputComponent', () => {
    let component;
    let fixture;
    beforeEach(() => {
        testing_1.TestBed.configureTestingModule({
            declarations: [text_input_component_1.TextInputComponent]
        });
        fixture = testing_1.TestBed.createComponent(text_input_component_1.TextInputComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
