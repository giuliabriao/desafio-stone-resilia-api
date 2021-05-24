const knex = require('../../database');

module.exports = {

  async index(user_id, category, page) {
    
    const projects = knex('projects')
      .limit(5)
      .offset((page - 1) * 5)

    if(user_id){
      projects
        .where({user_id})
        .join('users', 'users.id', '=', 'projects.user_id')
        .select('projects.*', 'users.firstName')
    }

    if(category){
      projects
        .where({category})
    }

    const [count] = await knex('projects').count()
    

    const results = await projects;
    return {results, count};
  },

}