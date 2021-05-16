const knex = require('../../database');
const bcrypt = require('bcrypt');

module.exports = {
    
    async create({
        firstName,
        lastName,
        username,
        avatar,
        email,
        birth,
        password
    }) {
        try {
            
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
            return error
        }
    },
    
}