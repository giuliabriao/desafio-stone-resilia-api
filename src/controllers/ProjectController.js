const knex = require('../database');

module.exports = {

    async index(req, res, next) {
        try {
            const results = await knex('projects')
            return res.json(results)
        } catch (error) {
            next(error)
        }
    },


    /* async create(req, res, next) {

        try {
            const {
                firstName,
                lastName,
                username,
                avatar,
                email,
                birth,
                password
            } = req.body

            const passwordHash = await bcrypt.hash(password, 8)

            await knex('users').insert({
                firstName,
                lastName,
                username,
                avatar,
                email,
                birth,
                password: passwordHash
            });
            return res.status(201).send()
        } catch (error) {
            next(error)
        }
    },
    async update(req, res, next) {
        try {
            const {
                firstName,
                lastName,
                username,
                avatar,
                email,
                birth,
                password
            } = req.body

            const passwordHash = await bcrypt.hash(password, 8)

            const { id } = req.params

            await knex('users')
                .update({
                    firstName,
                    lastName,
                    username,
                    avatar,
                    email,
                    birth,
                    password: passwordHash
                })
                .where({ id })

            return res.send()
        } catch (error) {
            next(error)
        }
    },
    async delete(req, res, next) {
        try {
            const { id } = req.params

            await knex('users')
                .where({ id })
                .update("deleted_at", new Date())
                
            return res.send()
        } catch (error) {
            next(error)
        }
    } */
}