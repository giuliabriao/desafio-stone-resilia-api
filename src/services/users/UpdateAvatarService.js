const knex = require("../../database");

module.exports = {
  async update(url, id) {
    console.log(url);
    await knex("users").update({ avatar: url }).where({ id });
  },
};
