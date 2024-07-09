// user.controller.js
const User = require('./model');

// Create User
exports.createUser = async (req, res) => {
    try {
        const user = await User.create(req.body);
        res.status(201).json(user);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
};

// Get All Users
exports.getAllUsers = async (req, res) => {
    try {
        const users = await User.findAll();
        res.status(200).json(users);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

// Get User by ID
exports.getUserById = async (req, res) => {
    try {
        const user = await User.findByPk(req.params.id);
        if (!user) {
            res.status(404).json({ message: 'User not found' });
        } else {
            res.status(200).json(user);
        }
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

// Update User
exports.updateUser = async (req, res) => {
    try {
        const user = await User.findByPk(req.params.id);
        if (!user) {
            res.status(404).json({ message: 'User not found' });
        } else {
            await user.update(req.body);
            res.status(200).json(user);
        }
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

// Delete User
exports.deleteUser = async (req, res) => {
    try {
        const user = await User.findByPk(req.params.id);
        if (!user) {
            res.status(404).json({ message: 'User not found' });
        } else {
            await user.destroy();
            res.status(204).end();
        }
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};
