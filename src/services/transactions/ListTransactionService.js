const knex = require('../../database');

module.exports = {
  async index(sender, receptor) {
    try {
      const transactions = knex('transacion')

      if(sender){
        transactions
         .where({sender})
         .join('users', 'users.id', '=', 'sender')
         .select('transacion.*','users.firstName')
      }

      if(receptor){
        transactions
         .where({receptor})
         .join('projects', 'projects.id', '=', 'receptor')
         .select('transacion.*','projects.title')
      }

      const results = await transactions
      return results;
    } catch (error) {
      return error
    }
  },
}