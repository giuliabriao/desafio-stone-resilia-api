const knex = require('../../database');


module.exports = {

  async update({
    title,
    description,
    category,
    image,
    valuation,
    address,
    goal,
    balance,
    date_limit,
    account,
    id
  }) {
        await knex('projects')
            .update({
                title,
                description,
                category,
                image,
                valuation,
                address,
                goal,
                balance,
                date_limit,
                account,
            })
            .where({ id })
},
  
}


