const knex = require('../../database');

module.exports = {

<<<<<<< HEAD
  async index(user_id, category, page) {
    
    const projects = knex('projects')
      .limit(5)
      .offset((page - 1) * 5)
=======
  async index(user_id, category, page, id) {
    
    const projects = knex('projects')
      .limit(8)
      .offset((page - 1) * 8)
>>>>>>> development

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

<<<<<<< HEAD
=======
    if(id){
      projects
        .where({id})
    }

>>>>>>> development
    const [count] = await knex('projects').count()
    

    const results = await projects;
    return {results, count};
  },

}