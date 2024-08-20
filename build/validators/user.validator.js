"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const joi_1 = __importDefault(require("@hapi/joi"));
const http_status_codes_1 = __importDefault(require("http-status-codes"));
class UserValidator {
    constructor() {
        this.registration = (req, res, next) => {
            const schema = joi_1.default.object({
                firstName: joi_1.default.string().min(4).required(),
                lastName: joi_1.default.string().min(4).required(),
                email: joi_1.default.string().email().required(),
                password: joi_1.default.string().required(),
                mobileNo: joi_1.default.number().required()
            });
            const { error } = schema.validate(req.body);
            if (error) {
                next(error);
            }
            next();
        };
        this.registrationAdmin = (req, res, next) => {
            const schema = joi_1.default.object({
                firstName: joi_1.default.string().min(4).required(),
                lastName: joi_1.default.string().min(4).required(),
                email: joi_1.default.string().email().required(),
                password: joi_1.default.string().required(),
                mobileNo: joi_1.default.number().required(),
                role: "admin"
            });
            req.body.role = "admin";
            const { error } = schema.validate(req.body);
            if (error) {
                next(error);
            }
            next();
        };
        this.adminVerify = (req, res, next) => {
            if (req.body.role === "admin") {
                next();
            }
            else {
                res.status(http_status_codes_1.default.OK).json({
                    code: http_status_codes_1.default.OK,
                    data: "user Not Authorised to Perform this action",
                    message: 'Please Login with Valid Credentials'
                });
            }
        };
    }
}
exports.default = UserValidator;
