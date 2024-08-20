"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cart_controller_1 = __importDefault(require("../controllers/cart.controller"));
const auth_middleware_1 = require("../middlewares/auth.middleware");
class CartRoutes {
    constructor() {
        this.CartController = new cart_controller_1.default();
        this.router = express_1.default.Router();
        this.routes = () => {
            this.router.get('/', auth_middleware_1.userAuth, this.CartController.getCart); // Getting 
            this.router.post('/', auth_middleware_1.userAuth, this.CartController.createCart); // registration
            this.router.post('/add', auth_middleware_1.userAuth, this.CartController.updateCartAdd);
            this.router.post('/reduce', auth_middleware_1.userAuth, this.CartController.updateCartDes);
            this.router.post('/delete', auth_middleware_1.userAuth, this.CartController.deleteCart);
        };
        this.getRoutes = () => {
            return this.router;
        };
        this.routes();
    }
}
exports.default = CartRoutes;
