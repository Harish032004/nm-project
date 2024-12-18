"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.adminGuard = void 0;
const core_1 = require("@angular/core");
const router_1 = require("@angular/router");
const ngx_toastr_1 = require("ngx-toastr");
const user_service_1 = require("src/app/services/user.service");
const adminGuard = (route, state) => {
    // Injecting Angular services using the 'inject' function
    const router = (0, core_1.inject)(router_1.Router);
    const userService = (0, core_1.inject)(user_service_1.UserService);
    const toastrService = (0, core_1.inject)(ngx_toastr_1.ToastrService);
    // Checking if the current user is logged in and has admin privileges
    if (userService.currentUser && userService.currentUser.isAdmin) {
        // If admin, allow access to the route
        return true;
    }
    // If not admin, show an error message and navigate to the dashboard
    toastrService.error('Access Denied');
    router.navigate(['/dashboard']);
    // Return false to deny access to the route
    return false;
};
exports.adminGuard = adminGuard;
