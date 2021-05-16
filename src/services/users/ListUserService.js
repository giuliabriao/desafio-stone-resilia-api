const knex = require('../../database');


module.exports = {

    async index() {
        const users = await knex('users')
        return users
    },
}