const express = require('express');
const routes = express.Router();

const ProjectController = require('../controllers/ProjectController');

routes
    .get('/', ProjectController.index)
    .post('/', ProjectController.create)
    .put('/:id', ProjectController.update)
    .delete('/:id', ProjectController.delete)

module.exports = routes