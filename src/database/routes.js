const express = require('express');
const routes = express.Router();

const UserController = require('../controllers/UserController');
// const ProjectController = require('../controllers/ProjectController');

routes
    .get('/users', UserController.index)
    .post('/user', UserController.create)
    .put('/user/:id', UserController.update)
    .delete('/user/:id', UserController.delete)

module.exports = routes