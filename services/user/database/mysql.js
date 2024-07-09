// db.js
const { Sequelize } = require('sequelize');

// Replace the placeholders with your actual database credentials
const sequelize = new Sequelize(
    process.env.DATABASE_NAME, 
    process.env.DATABASE_USER, 
    process.env.DATABASE_PASSWORD, {
        host: process.env.DATABASE_HOST,
        port: process.env.DATABASE_PORT,
        dialect: process.env.DIALECT,
        logging: true // 
});

// Test the connection
async function testConnection() {
  try {
    await sequelize.authenticate();
    console.log('Connection has been established successfully.');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
}

testConnection();

module.exports = sequelize; // Export the sequelize instance for use in models
