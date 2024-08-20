"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const router = express_1.default.Router();
const user_route_1 = __importDefault(require("./user.route"));
const book_route_1 = __importDefault(require("./book.route"));
const cart_route_1 = __importDefault(require("./cart.route"));
/**
 * Function contains Application routes
 *
 * @returns router
 */
const routes = () => {
    router.get('/', (req, res) => {
        res.json('Welcome');
    });
    router.use('/users', new user_route_1.default().getRoutes());
    router.use('/books', new book_route_1.default().getRoutes());
    router.use('/cart', new cart_route_1.default().getRoutes());
    return router;
};
exports.default = routes;
