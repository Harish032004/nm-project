"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const testing_1 = require("@angular/core/testing");
const input_container_component_1 = require("./input-container.component");
describe('InputContainerComponent', () => {
    let component;
    let fixture;
    beforeEach(() => {
        testing_1.TestBed.configureTestingModule({
            declarations: [input_container_component_1.InputContainerComponent]
        });
        fixture = testing_1.TestBed.createComponent(input_container_component_1.InputContainerComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
