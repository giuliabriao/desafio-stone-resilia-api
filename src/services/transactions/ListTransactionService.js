const knex = require('../../database');

module.exports = {
    async index() {
        try {
            const transactions = await knex('transacion')
            return transactions
        } catch (error) {
            return error
        }
    },
}