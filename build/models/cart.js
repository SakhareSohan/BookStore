'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
exports.default = (sequelize, DataTypes) => {
    class Cart extends sequelize_1.Model {
        static associate(models) {
            Cart.belongsTo(models.Users, {
                foreignKey: 'userId',
            });
            Cart.belongsTo(models.Books, {
                foreignKey: 'bookId',
            });
            Cart.belongsTo(models.Books, {
                foreignKey: 'price',
            });
        }
    }
    Cart.init({
        bookId: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: 'books',
                key: 'id',
            }
        },
        userId: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: 'users',
                key: 'id'
            }
        },
        quantity: {
            type: DataTypes.INTEGER,
            allowNull: false,
            defaultValue: 1,
        },
        price: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: 'books',
                key: 'id',
            }
        },
    }, {
        sequelize,
        modelName: 'cart'
    });
    return Cart;
};
