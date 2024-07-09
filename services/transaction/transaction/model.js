// transaction.model.js
const { DataTypes } = require('sequelize');
const sequelize = require('../database/mysql');
const User = require('../../user/auth/model'); 
const Material = require('../../material/material/model'); 

const Transaction = sequelize.define('Transaction', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    vendorId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: User, // Reference to the User model
            key: 'id'
        }
    },
    customerId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: User, // Reference to the User model
            key: 'id'
        }
    },
    materialId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: Material, // Reference to the Material model
            key: 'id'
        }
    },
    transactionDate: {
        type: DataTypes.DATE,
        allowNull: false
    }
});

module.exports = Transaction;
