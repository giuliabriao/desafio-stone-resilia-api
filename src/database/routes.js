const express = require('express');
const routes = express.Router();

const UserController = require('../controllers/UserController');
const ProjectController = require('../controllers/ProjectController');
const TransactionController = require('../controllers/TransactionController');

routes
    .get('/users', UserController.index)
    .post('/user', UserController.create)
    .put('/user/:id', UserController.update)
    .delete('/user/:id', UserController.delete)

    .get('/projects', ProjectController.index)
    .post('/projects', ProjectController.create)
    .put('/projects/:id', ProjectController.update)
    .delete('/projects/:id', UserController.delete)

    .get('/transacions', TransactionController.index)
    .post('/transacions', TransactionController.create)

module.exports = routes