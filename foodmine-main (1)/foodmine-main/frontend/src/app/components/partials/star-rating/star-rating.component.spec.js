"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const testing_1 = require("@angular/core/testing");
const star_rating_component_1 = require("./star-rating.component");
describe('StarRatingComponent', () => {
    let component;
    let fixture;
    beforeEach(() => {
        testing_1.TestBed.configureTestingModule({
            declarations: [star_rating_component_1.StarRatingComponent]
        });
        fixture = testing_1.TestBed.createComponent(star_rating_component_1.StarRatingComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
