"use strict";
var __esDecorate = (this && this.__esDecorate) || function (ctor, descriptorIn, decorators, contextIn, initializers, extraInitializers) {
    function accept(f) { if (f !== void 0 && typeof f !== "function") throw new TypeError("Function expected"); return f; }
    var kind = contextIn.kind, key = kind === "getter" ? "get" : kind === "setter" ? "set" : "value";
    var target = !descriptorIn && ctor ? contextIn["static"] ? ctor : ctor.prototype : null;
    var descriptor = descriptorIn || (target ? Object.getOwnPropertyDescriptor(target, contextIn.name) : {});
    var _, done = false;
    for (var i = decorators.length - 1; i >= 0; i--) {
        var context = {};
        for (var p in contextIn) context[p] = p === "access" ? {} : contextIn[p];
        for (var p in contextIn.access) context.access[p] = contextIn.access[p];
        context.addInitializer = function (f) { if (done) throw new TypeError("Cannot add initializers after decoration has completed"); extraInitializers.push(accept(f || null)); };
        var result = (0, decorators[i])(kind === "accessor" ? { get: descriptor.get, set: descriptor.set } : descriptor[key], context);
        if (kind === "accessor") {
            if (result === void 0) continue;
            if (result === null || typeof result !== "object") throw new TypeError("Object expected");
            if (_ = accept(result.get)) descriptor.get = _;
            if (_ = accept(result.set)) descriptor.set = _;
            if (_ = accept(result.init)) initializers.unshift(_);
        }
        else if (_ = accept(result)) {
            if (kind === "field") initializers.unshift(_);
            else descriptor[key] = _;
        }
    }
    if (target) Object.defineProperty(target, contextIn.name, descriptor);
    done = true;
};
var __runInitializers = (this && this.__runInitializers) || function (thisArg, initializers, value) {
    var useValue = arguments.length > 2;
    for (var i = 0; i < initializers.length; i++) {
        value = useValue ? initializers[i].call(thisArg, value) : initializers[i].call(thisArg);
    }
    return useValue ? value : void 0;
};
var __setFunctionName = (this && this.__setFunctionName) || function (f, name, prefix) {
    if (typeof name === "symbol") name = name.description ? "[".concat(name.description, "]") : "";
    return Object.defineProperty(f, "name", { configurable: true, value: prefix ? "".concat(prefix, " ", name) : name });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserService = void 0;
const core_1 = require("@angular/core");
const rxjs_1 = require("rxjs");
const User_1 = require("../shared/models/User");
const urls_1 = require("../shared/constants/urls");
const USER_KEY = 'User'; //for local storage
let UserService = (() => {
    let _classDecorators = [(0, core_1.Injectable)({
            providedIn: 'root'
        })];
    let _classDescriptor;
    let _classExtraInitializers = [];
    let _classThis;
    var UserService = _classThis = class {
        constructor(http, toastrService) {
            this.http = http;
            this.toastrService = toastrService;
            // BehaviorSubject for managing the user state
            this.userSubject = new rxjs_1.BehaviorSubject(this.getUserFromLocalStorage());
            // Create an observable from the userSubject
            this.userObservable = this.userSubject.asObservable();
        }
        // Getter for the current user
        get currentUser() {
            return this.userSubject.value;
        }
        // Method to handle user login
        login(userLogin) {
            return this.http.post(urls_1.USER_LOGIN_URL, userLogin).pipe((0, rxjs_1.tap)({
                next: (user) => {
                    // Save the logged in user to local storage and trigger a notification about it
                    this.setUserToLocalStorage(user);
                    this.userSubject.next(user);
                    this.toastrService.success(`Welcome to Foodmine ${user.name}!`, 'Login Successful');
                },
                error: (errorResponse) => {
                    // Display error message if login fails
                    this.toastrService.error(errorResponse.error, 'Login Failed');
                }
            }));
        }
        // Method to handle user registration
        register(userRegister) {
            return this.http.post(urls_1.USER_REGISTER_URL, userRegister).pipe((0, rxjs_1.tap)({
                next: (user) => {
                    // Update user state and display success message
                    this.setUserToLocalStorage(user);
                    this.userSubject.next(user);
                    this.toastrService.success(`Welcome to Foodmine ${user.name}!`, 'Register Successful');
                },
                error: (errorResponse) => {
                    // Display error message if registration fails
                    this.toastrService.error(errorResponse.error, 'Register Failed');
                }
            }));
        }
        // Method to handle user logout
        logout() {
            this.userSubject.next(new User_1.User());
            localStorage.removeItem(USER_KEY);
            window.location.reload();
        }
        //may require changes
        // Method to update user profile
        updateProfile(userUpdateProfile) {
            return this.http.put(urls_1.USER_UPDATE_PROFILE_URL, userUpdateProfile).pipe((0, rxjs_1.tap)({
                next: (user) => {
                    // Update the current user in memory and store it in local storage
                    this.setUserToLocalStorage(user);
                    this.userSubject.next(user);
                    this.toastrService.success(`Profile Updated Successfully`, 'Profile Updated');
                },
                error: (errorResponse) => {
                    // Display error message if update fails
                    this.toastrService.error(errorResponse.error, 'Profile Update Failed');
                }
            }));
        }
        //may require changes
        // Method to change user password
        changePassword(currentPassword, newPassword) {
            // Construct the request body
            const requestBody = {
                currentPassword: currentPassword,
                newPassword: newPassword,
            };
            return this.http.put(urls_1.USER_CHANGE_PASSWORD_URL, requestBody).pipe((0, rxjs_1.tap)({
                next: () => {
                    // Display success message if password change is successful
                    this.toastrService.success(`Password Changed Successfully`, 'Password Changed');
                },
                error: (errorResponse) => {
                    // Display error message if password change fails
                    this.toastrService.error(errorResponse.error, 'Password Change Failed');
                }
            }));
        }
        // Method to get all users
        getAll(searchTerm) {
            return this.http.get(urls_1.GET_ALL_USERS + (searchTerm !== null && searchTerm !== void 0 ? searchTerm : ''));
        }
        // Method to toggle user block status
        toggleBlock(userId) {
            return this.http.put(urls_1.USER_BLOCK_URL + userId, {});
        }
        getById(userId) {
            return this.http.get(urls_1.USER_BY_ID_URL + userId);
        }
        updateUser(userid, userData) {
            return this.http.put(urls_1.UPDATE_USER_URL + userid, userData);
        }
        // Method to set user data to local storage
        setUserToLocalStorage(user) {
            localStorage.setItem(USER_KEY, JSON.stringify(user));
        }
        // Method to get user data from local storage
        getUserFromLocalStorage() {
            const userJson = localStorage.getItem(USER_KEY);
            if (userJson) {
                return JSON.parse(userJson);
            }
            return new User_1.User();
        }
    };
    __setFunctionName(_classThis, "UserService");
    (() => {
        const _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(null) : void 0;
        __esDecorate(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name, metadata: _metadata }, null, _classExtraInitializers);
        UserService = _classThis = _classDescriptor.value;
        if (_metadata) Object.defineProperty(_classThis, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        __runInitializers(_classThis, _classExtraInitializers);
    })();
    return UserService = _classThis;
})();
exports.UserService = UserService;
