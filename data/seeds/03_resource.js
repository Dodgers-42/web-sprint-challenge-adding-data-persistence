exports.seed =async function(knex) {
    // Deletes ALL existing entries
    await knex("resource").insert([
      {name: "people"},
      {name: "room"},
      {name: "tarps"},
      {name: "paint"},
      {name: "brushes"},
      {name: "tape"},
      {name: "ladder"},
      {name: "cleaning supplies"},
      {name: "saw"},
      {name: "trimmers"},
      {name: "trash can"},
      {name: "broom"},
      {name: "dust pan"},
      {name: "tree"},
      {name: "paint tray"},
  
  
    ])
  };