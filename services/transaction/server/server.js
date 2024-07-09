require('dotenv').config();
const express = require('express');
const transactionRoutes = require('../transaction/route');
const sequelize = require('../database/mysql'); // Correct relative path
const { handleError } = require('../../shared/middlewares/error.middleware');
const app = express();
app.use(express.json());

// Routes
app.use(transactionRoutes);

// Error handling middleware
app.use(handleError);

// Sync database and start server
const PORT = process.env.TRANSACTION_SERVICE_PORT || 3003;

sequelize.sync().then(() => {
  app.listen(PORT, () => {
    console.log(`Transaction service running on port ${PORT}`);
  });
}).catch(err => {
  console.error('Unable to connect to the database:', err);
});

module.exports = app;
