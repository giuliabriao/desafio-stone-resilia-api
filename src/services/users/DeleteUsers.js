const knex = require('../../database');


module.exports = {
    async delete({id}) {

      await knex('users')
        .where({ id })
        .update("deleted_at", new Date())
    }
}