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
const cart_1 = __importDefault(require("../models/cart"));
class CartService {
    constructor() {
        this.Cart = (0, cart_1.default)(database_1.default, database_1.DataTypes);
        // Get cart by user ID
        this.getCart = (id) => __awaiter(this, void 0, void 0, function* () {
            const data = yield this.Cart.findAll({
                where: { userId: id }
            });
            return data;
        });
        this.createCart = (body) => __awaiter(this, void 0, void 0, function* () {
            const cartData = yield this.Cart.findAll({
                where: {
                    userId: body.userId
                }
            });
            if (cartData) {
                console.log(cartData);
            }
            const obj = {
                "bookId": body.bookId,
                "userId": body.userId,
                "quantity": body.quantity,
                "price": body.price
            };
        });
        // Method to increase book quantity or add a new book
        this.increaseBook = (body) => __awaiter(this, void 0, void 0, function* () {
            const cartData = yield this.Cart.findOne({
                where: { userId: body.userId }
            });
            if (cartData) {
                for (let index = 0; index < cartData.bookId.length; index++) {
                    if (cartData.bookId[index] === body.bookId) {
                        const updatedQuantities = [...cartData.quantity];
                        updatedQuantities[index] += 1;
                        const updatedPrices = [...cartData.price];
                        updatedPrices[index] = body.price;
                        cartData.quantity = updatedQuantities;
                        cartData.price = updatedPrices;
                        const data = yield cartData.save();
                        return data;
                    }
                }
            }
            else {
                cartData.bookId = [...cartData.bookId, body.bookId];
                cartData.quantity = [...cartData.quantity, body.quantity];
                cartData.price = [...cartData.price, body.price];
                // Save the updated cart
                const data = yield cartData.save();
                return data;
            }
        });
        this.decreaseBook = (body) => __awaiter(this, void 0, void 0, function* () {
            const cartData = yield this.Cart.findOne({
                where: { userId: body.userId }
            });
            if (cartData) {
                for (let index = 0; index < cartData.bookId.length; index++) {
                    if (cartData.bookId[index] === body.bookId) {
                        const updatedQuantities = [...cartData.quantity];
                        updatedQuantities[index] -= 1;
                        const updatedPrices = [...cartData.price];
                        updatedPrices[index] = body.price;
                        cartData.quantity = updatedQuantities;
                        cartData.price = updatedPrices;
                        const data = yield cartData.save();
                        return data;
                    }
                }
                return cartData;
            }
            else {
                cartData.bookId = [...cartData.bookId, body.bookId];
                cartData.quantity = [...cartData.quantity, body.quantity];
                cartData.price = [...cartData.price, body.price];
                // Save the updated cart
                const data = yield cartData.save();
                return data;
            }
        });
        this.deleteCart = (body) => __awaiter(this, void 0, void 0, function* () {
            const cartData = yield this.Cart.destroy({
                where: { userId: body.userId }
            });
            return cartData;
        });
    }
}
exports.default = CartService;
