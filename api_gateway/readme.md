# API Gateway for Microservices Project

This project sets up an API Gateway to handle routing for multiple microservices, including user, material, and transaction services. The API Gateway uses `express` and `http-proxy-middleware` to forward requests to the appropriate backend services.

## Prerequisites

Ensure you have the following installed:
- Node.js (v14.x or later)
- npm (v6.x or later)
- MySQL (for backend services)

## For api gateway service
- npm install
- node server.js

# Test user service through API Gateway
curl -i -H "Accept: application/json" -H "Content-Type: application/json" -X GET http://localhost:3000/api/users

# Test material service through API Gateway
curl -i -H "Accept: application/json" -H "Content-Type: application/json" -X GET http://localhost:3000/api/materials

# Test transaction service through API Gateway
curl -i -H "Accept: application/json" -H "Content-Type: application/json" -X GET http://localhost:3000/api/transactions
