"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DataTypes = void 0;
const sequelize_1 = require("sequelize");
const logger_1 = __importDefault(require("./logger"));
const dotenv_1 = __importDefault(require("dotenv"));
const config_1 = __importDefault(require("./config"));
dotenv_1.default.config();
var sequelize_2 = require("sequelize");
Object.defineProperty(exports, "DataTypes", { enumerable: true, get: function () { return sequelize_2.DataTypes; } });
const logger = logger_1.default.logger;
let DATABASE = config_1.default.development.database;
let USERNAME = config_1.default.development.username;
let PASSWORD = config_1.default.development.password;
let HOST = config_1.default.development.host;
let PORT = parseInt(config_1.default.development.port);
if (process.env.NODE_ENV === 'test') {
    DATABASE = config_1.default.test.database;
    USERNAME = config_1.default.test.username;
    PASSWORD = config_1.default.test.password;
    HOST = config_1.default.test.host;
    PORT = parseInt(config_1.default.test.port);
}
const sequelize = new sequelize_1.Sequelize(DATABASE, USERNAME, PASSWORD, {
    host: HOST,
    port: PORT,
    dialect: 'postgres',
    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
    }
});
sequelize
    .authenticate()
    .then(() => {
    logger.info('Connected to the database.');
})
    .catch((error) => {
    logger.error('Could not connect to the database.', error);
});
sequelize.sync();
exports.default = sequelize;
