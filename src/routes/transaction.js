const express = require('express');
const routes = express.Router();

const TransactionController = require('../controllers/TransactionController');
const auth = require('../middlewares/isAuthenticated');

routes.use(auth.isAuthenticated)
routes
  .get('/', TransactionController.index)
  .post('/', TransactionController.create)

module.exports = routes