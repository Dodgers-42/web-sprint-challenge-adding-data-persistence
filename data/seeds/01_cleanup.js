exports.seed = async function(knex) {
    await knex("task").truncate()
    await knex("resource").truncate()
    await knex("project").truncate()
  };