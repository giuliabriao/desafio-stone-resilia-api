const knex = require('../../database');


module.exports = {

  async index() {
    const users = await knex('users')
      .select("firstName","lastName","username","avatar","email","birth")
    
    delete users

    return users
  },
}