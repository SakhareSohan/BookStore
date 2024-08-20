'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
exports.default = (sequelize, DataTypes) => {
    class Book extends sequelize_1.Model {
        static associate(models) {
            Book.belongsTo(models.Users, {
                foreignKey: 'admin_user_id',
            });
        }
    }
    Book.init({
        description: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        discountPrice: {
            type: DataTypes.INTEGER,
            allowNull: true,
        },
        bookImage: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        admin_user_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: 'users',
                key: 'id'
            }
        },
        bookName: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        author: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        quantity: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        price: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
    }, {
        sequelize,
        modelName: 'book'
    });
    return Book;
};
