"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PasswordsMatchValidator = void 0;
const PasswordsMatchValidator = (passwordControlName, confirmPasswordControlName) => {
    const validator = (form) => {
        const passwordControl = form.get(passwordControlName);
        const confirmPasswordControl = form.get(confirmPasswordControlName);
        if (!passwordControl || !confirmPasswordControl)
            return null;
        if (passwordControl.value !== confirmPasswordControl.value) {
            confirmPasswordControl.setErrors({ notMatch: true });
            return { notMatch: true };
        }
        else {
            const errors = confirmPasswordControl.errors;
            if (!errors)
                return null;
            delete errors.notMatch;
            confirmPasswordControl.setErrors(errors);
            return null;
        }
    };
    return validator;
};
exports.PasswordsMatchValidator = PasswordsMatchValidator;
// import { AbstractControl, ValidationErrors, ValidatorFn } from "@angular/forms";
// export const PasswordsMatchValidator: ValidatorFn = (form: AbstractControl): ValidationErrors | null => {
//     const passwordControl = form.get('password');
//     const confirmPasswordControl = form.get('confirmPassword');
//     if (!passwordControl || !confirmPasswordControl) return null;
//     if (passwordControl.value !== confirmPasswordControl.value) {
//         confirmPasswordControl.setErrors({ notMatch: true });
//         return { notMatch: true };
//     } else {
//         const errors = confirmPasswordControl.errors;
//         if (!errors) return null;
//         delete errors.notMatch;
//         confirmPasswordControl.setErrors(errors);
//         return null;
//     }
// };
