const express = require('express');
const routes = express.Router();

const usersRoutes = require('./users');
const projectsRoutes = require('./projects');
const transactionsRoutes = require('./transaction');
const sessionsRoutes = require('./session');
//routes
routes.use('/users', usersRoutes);
routes.use('/projects', projectsRoutes);
routes.use('/transactions', transactionsRoutes);
routes.use('/sessions', sessionsRoutes);


module.exports = routes