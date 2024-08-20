"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
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
const database_1 = __importStar(require("../config/database"));
const book_1 = __importDefault(require("../models/book"));
class BookService {
    constructor() {
        this.Book = (0, book_1.default)(database_1.default, database_1.DataTypes);
        //get all users
        this.getAllBook = () => __awaiter(this, void 0, void 0, function* () {
            const data = yield this.Book.findAll();
            return data;
        });
        //create a new user
        this.getBookAdmin = (id) => __awaiter(this, void 0, void 0, function* () {
            const data = yield this.Book.findOne({
                where: { admin_user_id: id }
            });
            return data;
        });
        //update a user
        this.getBookId = (id) => __awaiter(this, void 0, void 0, function* () {
            const data = yield this.Book.findOne({
                where: { id: id }
            });
            return data;
        });
        //delete a user
        this.createBook = (body) => __awaiter(this, void 0, void 0, function* () {
            const obj = {
                "description": body.description,
                "discountPrice": body.discountPrice,
                "bookImage": " ",
                "admin_user_id": body.userId,
                "bookName": body.bookName,
                "author": body.author,
                "quantity": body.quantity,
                "price": body.price
            };
            const data = yield this.Book.create(obj);
            return data;
        });
        //get a single user
        this.updateBook = (id, body) => __awaiter(this, void 0, void 0, function* () {
            const obj = {
                // "description": body.description,
                // "bookImage": " ",
                // "admin_user_id": body.userId,
                // "bookName": body.bookName,
                // "author": body.author, 
                // "quantity":body.quantity,
                "discountPrice": body.discount,
                "price": body.price
            };
            const data = yield this.Book.update(obj, {
                where: { id: id }
            });
            return data;
        });
        //get a single user
        this.deleteBook = (id) => __awaiter(this, void 0, void 0, function* () {
            const data = yield this.Book.destroy(id);
            return data;
        });
    }
}
exports.default = BookService;
