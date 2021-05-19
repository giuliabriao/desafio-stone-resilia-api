const knex = require('../../database');
const bcrypt = require('bcrypt');

module.exports = {


    async update({
        firstName,
        lastName,
        username,
        avatar,
        email,
        birth,
        password,
        id
    }) {
        

        const passwordHash = await bcrypt.hash(password, 8)

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
    },
    
}