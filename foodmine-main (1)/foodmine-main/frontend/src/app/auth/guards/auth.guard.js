"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.authGuard = void 0;
const core_1 = require("@angular/core");
const router_1 = require("@angular/router");
const user_service_1 = require("src/app/services/user.service");
const authGuard = (route, state) => {
    const router = (0, core_1.inject)(router_1.Router);
    const userService = (0, core_1.inject)(user_service_1.UserService);
    if (userService.currentUser.token) {
        return true;
    }
    router.navigate(['/login'], { queryParams: { returnUrl: state.url } });
    return false;
};
exports.authGuard = authGuard;
