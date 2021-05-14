const knex = require('../database');

module.exports = {

    async index(req, res) {
        const results = await knex('transacion')
        return res.json(results)
        //temos que esconder o password do GET
    },
    
    
    async create(req, res, next) {

        try {
            const {
                value,
                date,
                sender,
                receptor,
            } = req.body

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