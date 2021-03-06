const knex = require('../../database');

module.exports = {

  async index(user_id, category, page, id) {
    
    const projects = knex('projects')
      .limit(8)
      .offset((page - 1) * 8)

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

    if(id){
      projects
        .where({id})
    }

    const [count] = await knex('projects').count()
    

    const results = await projects;
    return {results, count};
  },

}