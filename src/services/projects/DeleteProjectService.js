const knex = require('../../database');


module.exports = {

  async delete({ id }) {

    await knex('projects')
      .where({ id })
      .update("deleted_at", new Date())
  }

}


