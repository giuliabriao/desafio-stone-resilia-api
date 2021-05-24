const express = require('express');
const routes = express.Router();

const ProjectController = require('../controllers/ProjectController');
const auth = require('../middlewares/isAuthenticated');

routes
    .get('/', ProjectController.index)
    .post('/', auth.isAuthenticated, ProjectController.create)
    .put('/:id', auth.isAuthenticated, ProjectController.update)
    .delete('/:id', auth.isAuthenticated, ProjectController.delete)

module.exports = routes