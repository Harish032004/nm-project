"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const testing_1 = require("@angular/core/testing");
const default_button_component_1 = require("./default-button.component");
describe('DefaultButtonComponent', () => {
    let component;
    let fixture;
    beforeEach(() => {
        testing_1.TestBed.configureTestingModule({
            declarations: [default_button_component_1.DefaultButtonComponent]
        });
        fixture = testing_1.TestBed.createComponent(default_button_component_1.DefaultButtonComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
