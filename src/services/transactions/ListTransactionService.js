const knex = require('../../database');

module.exports = {
    async index() {
        const transactions = await knex('transacion')
        return transactions
    },
}