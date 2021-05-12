const knexfile = require('../../knex_file');
const knex = require('knex')(knexfile['development']);

module.exports = knex;