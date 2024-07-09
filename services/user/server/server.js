require('dotenv').config();
const express = require('express');
const userRoutes = require('../auth/route');
const sequelize = require('../database/mysql'); // Correct relative path
const { handleError } = require('../../shared/middlewares/error.middleware');
const app = express();
app.use(express.json());

// Routes
app.use(userRoutes);

// Error handling middleware
app.use(handleError);

// Sync database and start server
const PORT = process.env.USER_SERVICE_PORT || 3001;

sequelize.sync().then(() => {
  app.listen(PORT, () => {
    console.log(`User service running on port ${PORT}`);
  });
}).catch(err => {
  console.error('Unable to connect to the database:', err);
});

module.exports = app;
