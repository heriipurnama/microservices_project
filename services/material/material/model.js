// material.model.js
const { DataTypes } = require('sequelize');
const sequelize = require('../database/mysql');

const Material = sequelize.define('Material', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    materialName: {
        type: DataTypes.STRING,
        allowNull: false
    }
});

module.exports = Material;
