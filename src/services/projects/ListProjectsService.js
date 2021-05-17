const knex = require('../../database');

module.exports = {

  async index() {
    const projects = await knex('projects')
    return projects
  },

}