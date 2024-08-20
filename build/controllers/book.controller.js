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
const book_service_1 = __importDefault(require("../services/book.service"));
class BookController {
    constructor() {
        this.BookService = new book_service_1.default();
        /**
         * Controller to get all users available
         * @param  {object} Request - request object
         * @param {object} Response - response object
         * @param {Function} NextFunction
         */
        this.getAllBook = (req, res, next) => __awaiter(this, void 0, void 0, function* () {
            try {
                const data = yield this.BookService.getAllBook();
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
         * Controller to get a single user
         * @param  {object} Request - request object
         * @param {object} Response - response object
         * @param {Function} NextFunction
         */
        this.getBookAdmin = (req, res, next) => __awaiter(this, void 0, void 0, function* () {
            try {
                const data = yield this.BookService.getBookAdmin(req.params.adminid);
                res.status(http_status_codes_1.default.OK).json({
                    code: http_status_codes_1.default.OK,
                    data: data,
                    message: 'User fetched successfully'
                });
            }
            catch (error) {
                next(error);
            }
        });
        /**
          * Controller to update a user
          * @param  {object} Request - request object
          * @param {object} Response - response object
          * @param {Function} NextFunction
          */
        this.getBookId = (req, res, next) => __awaiter(this, void 0, void 0, function* () {
            try {
                const data = yield this.BookService.getBookId(req.params.bookid);
                res.status(http_status_codes_1.default.ACCEPTED).json({
                    code: http_status_codes_1.default.ACCEPTED,
                    data: data,
                    message: 'User updated successfully'
                });
            }
            catch (error) {
                next(error);
            }
        });
        /**
         * Controller to create new user
         * @param  {object} Request - request object
         * @param {object} Response - response object
         * @param {Function} NextFunction
         */
        this.createBook = (req, res, next) => __awaiter(this, void 0, void 0, function* () {
            try {
                const data = yield this.BookService.createBook(req.body);
                res.status(http_status_codes_1.default.CREATED).json({
                    code: http_status_codes_1.default.CREATED,
                    data: data,
                    message: 'User created successfully'
                });
            }
            catch (error) {
                next(error);
            }
        });
        /**
         * Controller to create new user
         * @param  {object} Request - request object
         * @param {object} Response - response object
         * @param {Function} NextFunction
         */
        this.updateBook = (req, res, next) => __awaiter(this, void 0, void 0, function* () {
            try {
                const data = yield this.BookService.updateBook(req.params.bookid, req.body);
                res.status(http_status_codes_1.default.CREATED).json({
                    code: http_status_codes_1.default.CREATED,
                    data: data,
                    message: 'User created successfully'
                });
            }
            catch (error) {
                next(error);
            }
        });
        /**
         * Controller to delete a user
         * @param  {object} Request - request object
         * @param {object} Response - response object
         * @param {Function} NextFunction
         */
        this.deleteBook = (req, res, next) => __awaiter(this, void 0, void 0, function* () {
            try {
                yield this.BookService.deleteBook(req.params.bookid);
                res.status(http_status_codes_1.default.OK).json({
                    code: http_status_codes_1.default.OK,
                    data: {},
                    message: 'User deleted successfully'
                });
            }
            catch (error) {
                next(error);
            }
        });
    }
}
exports.default = BookController;
