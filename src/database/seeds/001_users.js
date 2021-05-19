exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('users').del()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        {
          firstName: "Giulia",
          lastName: "Brião",
          username: "giuliabriao",
          avatar: "https://avatars.githubusercontent.com/u/75391453?v=4",
          email: "giuliabriao@gmail.com",
          birth: "01/07/1998",
          password: "giubriao898/*$%"
        }
      ]);
    });
};