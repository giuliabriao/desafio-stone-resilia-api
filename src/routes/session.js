const express = require('express');
const routes = express.Router();

const SessionController = require('../controllers/SessionController');

routes
  .post('/', SessionController.create)

module.exports = routes
//commit