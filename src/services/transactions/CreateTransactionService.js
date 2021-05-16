const knex = require('../../database');

module.exports = {

    async create({
        value,
        date,
        sender,
        receptor,
    }) {
        try {
            await knex('projects')
                .where('id', receptor)
                .increment("balance", value)

            await knex('users')
                .where('id', sender)
                .decrement("balance", value)
                
            await knex('transacion').insert({
                value,
                date,
                sender,
                receptor,
            });
            return res.status(201).send()
        } catch (error) {
            return error
        }
    },

}