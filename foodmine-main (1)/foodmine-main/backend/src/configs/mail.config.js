"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getClient = getClient;
/**
 * Returns a Mailgun client for sending emails.
 * @returns {Mailgun.Client} The Mailgun client instance.
 */
const form_data_1 = __importDefault(require("form-data"));
const mailgun_js_1 = __importDefault(require("mailgun.js"));
function getClient() {
    const mailgun = new mailgun_js_1.default(form_data_1.default);
    const client = mailgun.client({
        username: "api",
        key: process.env.MAILGUN_API_KEY || "",
    });
    return client;
}
