
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('transacion').del()
    .then(function () {
      // Inserts seed entries
      return knex('transacion').insert([
        {
          value:100.00,
          date:"07/01/1998",
          sender:7,
          receptor:1,
        }
      ]);
    });
};
