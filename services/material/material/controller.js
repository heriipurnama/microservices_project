// material.controller.js
const Material = require('./model');

// Create Material
exports.createMaterial = async (req, res, next) => {
    try {
        const material = await Material.create(req.body);
        res.status(201).json(material);
    } catch (err) {
        next(err);
    }
};

// Get All Materials
exports.getAllMaterials = async (req, res, next) => {
    try {
        const materials = await Material.findAll();
        res.status(200).json(materials);
    } catch (err) {
        next(err);
    }
};

// Get Material by ID
exports.getMaterialById = async (req, res, next) => {
    try {
        const material = await Material.findByPk(req.params.id);
        if (!material) {
            res.status(404).json({ message: 'Material not found' });
        } else {
            res.status(200).json(material);
        }
    } catch (err) {
        next(err);
    }
};

// Update Material
exports.updateMaterial = async (req, res, next) => {
    try {
        const material = await Material.findByPk(req.params.id);
        if (!material) {
            res.status(404).json({ message: 'Material not found' });
        } else {
            await material.update(req.body);
            res.status(200).json(material);
        }
    } catch (err) {
        next(err);
    }
};

// Delete Material
exports.deleteMaterial = async (req, res, next) => {
    try {
        const material = await Material.findByPk(req.params.id);
        if (!material) {
            res.status(404).json({ message: 'Material not found' });
        } else {
            await material.destroy();
            res.status(204).end();
        }
    } catch (err) {
        next(err);
    }
};
