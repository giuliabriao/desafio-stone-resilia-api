const knex = require('../../database');

module.exports = {

  async create({
    value,
    date,
    sender,
    receptor,
  }) {

    const AtualBalanceUser = await knex('users')
      .where('id', sender)
      .select("balance")

    if (await AtualBalanceUser[0].balance >= value) {
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
    }

    console.log("sem saldo")
    return 

  }
}