"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const testing_1 = require("@angular/core/testing");
const login_page_component_1 = require("./login-page.component");
describe('LoginPageComponent', () => {
    let component;
    let fixture;
    beforeEach(() => {
        testing_1.TestBed.configureTestingModule({
            declarations: [login_page_component_1.LoginPageComponent]
        });
        fixture = testing_1.TestBed.createComponent(login_page_component_1.LoginPageComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
