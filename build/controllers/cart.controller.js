"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
/* eslint-disable @typescript-eslint/no-explicit-any */
const http_status_codes_1 = __importDefault(require("http-status-codes"));
const cart_service_1 = __importDefault(require("../services/cart.service"));
class CartController {
    constructor() {
        this.CartService = new cart_service_1.default();
        /**
       * Controller to get all users available
       * @param  {object} Request - request object
       * @param {object} Response - response object
       * @param {Function} NextFunction
       */
        this.getCart = (req, res, next) => __awaiter(this, void 0, void 0, function* () {
            try {
                const data = yield this.CartService.getCart(req.body);
                res.status(http_status_codes_1.default.OK).json({
                    code: http_status_codes_1.default.OK,
                    data: data,
                    message: 'All users fetched successfully'
                });
            }
            catch (error) {
                next(error);
            }
        });
        /**
         * Controller to get all users available
         * @param  {object} Request - request object
         * @param {object} Response - response object
         * @param {Function} NextFunction
         */
        this.createCart = (req, res, next) => __awaiter(this, void 0, void 0, function* () {
            try {
                const data = yield this.CartService.createCart(req.body);
                res.status(http_status_codes_1.default.OK).json({
                    code: http_status_codes_1.default.OK,
                    data: data,
                    message: 'All users fetched successfully'
                });
            }
            catch (error) {
                next(error);
            }
        });
        /**
       * Controller to get all users available
       * @param  {object} Request - request object
       * @param {object} Response - response object
       * @param {Function} NextFunction
       */
        this.updateCartAdd = (req, res, next) => __awaiter(this, void 0, void 0, function* () {
            try {
                console.log(req.body);
                const data = yield this.CartService.increaseBook(req.body);
                res.status(http_status_codes_1.default.OK).json({
                    code: http_status_codes_1.default.OK,
                    data: data,
                    message: 'All users fetched successfully'
                });
            }
            catch (error) {
                next(error);
            }
        });
        /**
     * Controller to get all users available
     * @param  {object} Request - request object
     * @param {object} Response - response object
     * @param {Function} NextFunction
     */
        this.updateCartDes = (req, res, next) => __awaiter(this, void 0, void 0, function* () {
            try {
                const data = yield this.CartService.decreaseBook(req.body);
                res.status(http_status_codes_1.default.OK).json({
                    code: http_status_codes_1.default.OK,
                    data: data,
                    message: 'All users fetched successfully'
                });
            }
            catch (error) {
                next(error);
            }
        });
        /**
       * Controller to get all users available
       * @param  {object} Request - request object
       * @param {object} Response - response object
       * @param {Function} NextFunction
       */
        this.deleteCart = (req, res, next) => __awaiter(this, void 0, void 0, function* () {
            try {
                const data = yield this.CartService.deleteCart(req.body);
                res.status(http_status_codes_1.default.OK).json({
                    code: http_status_codes_1.default.OK,
                    data: data,
                    message: 'All users fetched successfully'
                });
            }
            catch (error) {
                next(error);
            }
        });
    }
}
exports.default = CartController;
