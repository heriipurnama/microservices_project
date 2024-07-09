// transaction.controller.js
const Transaction = require('./model');

// Create Transaction
exports.createTransaction = async (req, res) => {
    try {
        const transaction = await Transaction.create(req.body);
        res.status(201).json(transaction);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
};

// Get All Transactions
exports.getAllTransactions = async (req, res) => {
    try {
        const transactions = await Transaction.findAll();
        res.status(200).json(transactions);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

// Get Transaction by ID
exports.getTransactionById = async (req, res) => {
    try {
        const transaction = await Transaction.findByPk(req.params.id);
        if (!transaction) {
            res.status(404).json({ message: 'Transaction not found' });
        } else {
            res.status(200).json(transaction);
        }
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

// Update Transaction
exports.updateTransaction = async (req, res) => {
    try {
        const transaction = await Transaction.findByPk(req.params.id);
        if (!transaction) {
            res.status(404).json({ message: 'Transaction not found' });
        } else {
            await transaction.update(req.body);
            res.status(200).json(transaction);
        }
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

// Delete Transaction
exports.deleteTransaction = async (req, res) => {
    try {
        const transaction = await Transaction.findByPk(req.params.id);
        if (!transaction) {
            res.status(404).json({ message: 'Transaction not found' });
        } else {
            await transaction.destroy();
            res.status(204).end();
        }
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};
