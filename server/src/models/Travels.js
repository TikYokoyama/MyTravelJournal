const db = require("../database");
const { DataTypes } = require("sequelize");

const Travels = db.define(
    "Travels",
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        title: {
            type: DataTypes.STRING(45),
        },
        location: {
            type: DataTypes.STRING(45),
        },
        googleMapUrl: {
            type: DataTypes.STRING(1000),
        },
        startDate: {
            type: DataTypes.STRING(45),
        },
        endDate: {
            type: DataTypes.STRING(45),
        },
        descrip: {
            type: DataTypes.STRING(200),
        },
        image: {
            type: DataTypes.STRING(100),
        },
        continent: {
            type: DataTypes.STRING(45),
        },
    },
    {
        tableName: "travels",
        timestamps: false,
    },
);

module.exports = Travels;