const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
require('dotenv').config(); // Load environment variables

// Import route handlers
const categoryRoutes = require('./routes/categoryRoutes.js');
const productRoutes = require('./routes/productRoutes.js');


// Initialize Express application
const app = express();

// Middleware configuration
app.use(cors()); // Enable CORS for cross-origin requests
app.use(bodyParser.json()); // Parse JSON request bodies

// Routes
app.use('/api/categories', categoryRoutes); // CRUD for categories
app.use('/api/products', productRoutes);   // CRUD for products

// Home route
app.get('/', (req, res) => {
  res.send('Welcome to the API! Use /api/categories or /api/products');
});

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
