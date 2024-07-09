require('dotenv').config();
const express = require('express');
const { createProxyMiddleware } = require('http-proxy-middleware');
const errorHandler = require('./middlewares/error.middleware');

const app = express();

// Define proxy middleware for user service
const userProxy = createProxyMiddleware({
  target: process.env.USER_SERVICE_URL || 'http://localhost:3001', // Target URL of the user service
  changeOrigin: true, // Change the origin of the host header to the target URL
});

// Define proxy middleware for other services if needed
const materialProxy = createProxyMiddleware({
  target: process.env.MATERIAL_SERVICE_URL || 'http://localhost:3002', // Target URL of the user service
  changeOrigin: true, // Change the origin of the host header to the target URL
});


const transactionProxy = createProxyMiddleware({
  target: process.env.TRANSACTIION_SERVICE_URL || 'http://localhost:3003', // Target URL of the user service
  changeOrigin: true, // Change the origin of the host header to the target URL
});

// Use proxy middleware for respective routes
app.use('/api/users', userProxy);
app.use('/api/materials', materialProxy);
app.use('/api/transactions', transactionProxy);

app.use(errorHandler);

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
