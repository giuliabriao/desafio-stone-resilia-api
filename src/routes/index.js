const express = require('express');
const routes = express.Router();

const usersRoutes = require('./users');
const projectsRoutes = require('./projects');
const transactionsRoutes = require('./transaction');

routes.use('/users', usersRoutes);
routes.use('/projects', projectsRoutes);
routes.use('/transacions', transactionsRoutes);

module.exports = routes