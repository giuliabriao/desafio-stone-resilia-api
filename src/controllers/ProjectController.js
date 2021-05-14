const knex = require('../database');

module.exports = {

    //List projects
    async index(req, res, next) {
        try {
            const results = await knex('projects')
            return res.json(results)
        } catch (error) {
            next(error)
        }
    },

    //Create Projects
     async create(req, res, next) {

        try {
            const {
                title,
                description,
                category,
                image,
                valuetion,
                address,
                goal,
                balance,
                date_limit,
                account,
                user_id
            } = req.body

            await knex('projects').insert({
                title,
                description,
                category,
                image,
                valuetion,
                address,
                goal,
                balance,
                date_limit,
                account,
                user_id
            });
            return res.status(201).send()
        } catch (error) {
            next(error)
        }
    },

    //Update projects
    async update(req, res, next) {
        try {
            const {
                title,
                description,
                category,
                image,
                valuetion,
                address,
                goal,
                balance,
                date_limit,
                account, 
            } = req.body

            const { id } = req.params

            await knex('projects')
                .update({
                    title,
                    description,
                    category,
                    image,
                    valuetion,
                    address,
                    goal,
                    balance,
                    date_limit,
                    account,
                })
                .where({ id })

            return res.send()
        } catch (error) {
            next(error)
        }
    },

    //Delete Projects
    async delete(req, res, next) {
        try {
            const { id } = req.params

            await knex('projects')
                .where({ id })
                .update("deleted_at", new Date())
                
            return res.send()
        } catch (error) {
            next(error)
        }
    } 
}