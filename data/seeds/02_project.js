exports.seed =async function(knex) {
    // Deletes ALL existing entries
    await knex("project").insert([
      {amount: "1 gallon"},
      {amount: "1 roll of tape"},
      {amount: "1 brush"},
      {amount: "12 ft tarp"},
      {amount: "1 saw"},
      {amount: "1 latter"},
      
    ])
  };