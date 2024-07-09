// user.model.js
const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('../database/mysql');

const User = sequelize.define('User', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    username: {
        type: DataTypes.STRING,
        allowNull: false
    }
});

module.exports = User;
