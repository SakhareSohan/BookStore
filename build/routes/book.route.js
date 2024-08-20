"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const book_controller_1 = __importDefault(require("../controllers/book.controller"));
const user_validator_1 = __importDefault(require("../validators/user.validator"));
const auth_middleware_1 = require("../middlewares/auth.middleware");
class BookRoutes {
    constructor() {
        this.BookController = new book_controller_1.default();
        this.router = express_1.default.Router();
        this.admin = new user_validator_1.default();
        this.routes = () => {
            //// Admin routes
            // req.body.userId = id;
            // req.body.role = role;
            this.router.get('/', auth_middleware_1.userAuth, this.BookController.getAllBook); // get all books
            this.router.get('/:adminid', auth_middleware_1.userAuth, this.admin.adminVerify, this.BookController.getBookAdmin); // get books by admin id // validation
            this.router.get('/:bookid', auth_middleware_1.userAuth, this.BookController.getBookId); // get books by book id
            this.router.post('/', auth_middleware_1.userAuth, this.admin.adminVerify, this.BookController.createBook); // create book // validator for admin role
            this.router.post('/:bookid/update', auth_middleware_1.userAuth, this.admin.adminVerify, this.BookController.updateBook); // update book // validation
            this.router.delete('/:bookid/delete', auth_middleware_1.userAuth, this.admin.adminVerify, this.BookController.deleteBook); // delete book // validation
            //// User routes
        };
        this.getRoutes = () => {
            return this.router;
        };
        this.routes();
    }
}
exports.default = BookRoutes;
