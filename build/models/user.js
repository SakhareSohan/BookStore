'use strict';
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
const sequelize_1 = require("sequelize");
const bcrypt_1 = __importDefault(require("bcrypt"));
exports.default = (sequelize, DataTypes) => {
    class User extends sequelize_1.Model {
        static associate(models) {
            // define association here
        }
    }
    User.init({
        firstName: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        lastName: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        mobileNo: {
            type: DataTypes.INTEGER,
            defaultValue: 1234567890,
        },
        role: {
            type: DataTypes.STRING,
            defaultValue: 'user',
        }
    }, {
        sequelize,
        modelName: 'user',
        hooks: {
            beforeCreate: (user) => __awaiter(void 0, void 0, void 0, function* () {
                if (user.password) {
                    user.password = yield bcrypt_1.default.hash(user.password, 10);
                }
            }),
            beforeUpdate: (user) => __awaiter(void 0, void 0, void 0, function* () {
                if (user.changed(user.password)) {
                    user.password = yield bcrypt_1.default.hash(user.password, 10);
                }
            })
        }
    });
    return User;
};
