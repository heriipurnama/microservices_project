require('dotenv').config();
const express = require('express');
const materialRoutes = require('../material/route');
const sequelize = require('../database/mysql'); // Correct relative path
const { handleError } = require('../../shared/middlewares/error.middleware');
const app = express();
app.use(express.json());

// Routes
app.use(materialRoutes);

// Error handling middleware
app.use(handleError);

// Sync database and start server
const PORT = process.env.MATERIAL_SERVICE_PORT || 3002;

sequelize.sync().then(() => {
  app.listen(PORT, () => {
    console.log(`Material service running on port ${PORT}`);
  });
}).catch(err => {
  console.error('Material to connect to the database:', err);
});

module.exports = app;
