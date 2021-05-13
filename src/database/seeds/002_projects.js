exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('projects').del()
    .then(function () {
      // Inserts seed entries
      return knex('projects').insert([
        {
          user_id: 7,
          title: "Investe em mim",
          description: "Projeto resilia + stone",
          category:"startup",
          image: "",
          valuetion:100000,
          address:"Brasil",
          goal: 10000,
          balance: 0,
          account: "6y3t6etyw63tw6wte"
        }
      ]);
    });
};