const db = require('../database');
const Sequelize = require('sequelize');

const FoodInspection = db.define('food_inspection', {
  inspection_id: Sequelize.INTEGER,
  dba_name: Sequelize.TEXT,
  address: Sequelize.TEXT,
  city: Sequelize.TEXT,
  zip: Sequelize.INTEGER,
  inspection_date: Sequelize.DATE,
});

module.exports = db;
