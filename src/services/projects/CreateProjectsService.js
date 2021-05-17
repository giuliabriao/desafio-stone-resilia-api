const knex = require('../../database');


module.exports = {

  async create({
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
  }) {
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
  }
}


