const Sequelize = require("sequelize");

// Option 2: Passing a connection URI
const sequelize = new Sequelize("postgres://localhost:5432/karen");

module.exports = sequelize;
