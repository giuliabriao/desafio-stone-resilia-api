const knex = require('../../database');


module.exports = {

  async index() {
    const users = await knex('users')
      .select("firstName","lastName","username","avatar","email","birth","balance")
    
    delete users

    return users
  },
}