const knex = require("../../database");

module.exports = {
  async me(username) {
    const user = await knex("users")
      .where({ username })
      .select(
        "firstName",
        "lastName",
        "username",
        "avatar",
        "email",
        "birth",
        "balance",
        "id"
      );

    return user;
  },
};
