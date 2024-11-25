const { Sequelize } = require('sequelize');
require('dotenv').config(); // Load environment variables from .env file

// Create a Sequelize instance for database connection
const sequelize = new Sequelize(
  process.env.DB_NAME || 'testdb',     // Database name
  process.env.DB_USER || 'root',     // Database username
  process.env.DB_PASSWORD || 'password', // Database password
  {
    host: process.env.DB_HOST || 'localhost',     // Database host
    dialect: 'mysql',              // Database type (MySQL)
    port: process.env.DB_PORT || 3306, // Default MySQL port is 3306
    pool: {
      max: 10,   // Maximum number of connections
      min: 0,    // Minimum number of connections
      acquire: 30000, // Max time (ms) to get a connection before throwing an error
      idle: 10000 // Max time (ms) a connection can be idle before release
    },
    logging: false, // Disable logging; set to true for debugging
  }
);

// Test the database connection
(async () => {
  try {
    await sequelize.authenticate();
    console.log('Database connected successfully.');
  } catch (error) {
    console.error('Unable to connect to the database:', error.message);
  }
})();

module.exports = sequelize;
