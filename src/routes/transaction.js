const express = require('express');
const routes = express.Router();

const TransactionController = require('../controllers/TransactionController');

routes
  .get('/', TransactionController.index)
  .post('/', TransactionController.create)

module.exports = routes