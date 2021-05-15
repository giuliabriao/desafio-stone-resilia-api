const knex = require('../database');

module.exports = {

    // List transaction
    async index(req, res) {
        const results = await knex('transacion')
        return res.json(results)
        //temos que esconder o password do GET
    },
    
    // Create transactions
    async create(req, res, next) {

        try {
            const {
                value,
                date,
                sender,
                receptor,
            } = req.body

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
            next(error)
        }
    },

}