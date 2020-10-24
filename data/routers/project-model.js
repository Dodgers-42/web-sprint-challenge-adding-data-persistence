const db = require("../data/db-config");

// In addition to the migrations and seeding scripts, write a data access file that exports an object with the following functions:

// getResource(): should return a list of all recipes in the database.
// getShoppingList(recipe_id): should return a list of all ingredients and quantities for a given recipe
// getInstructions(recipe_id): should return a list of step by step instructions for preparing a recipe

function getResource() {
  return db("resource");
}

function getResourceById(id) {
  return db("resource").where({ id }).first();
}

function getInstructions(id) {
  return db("resource as r")
    .join("instructions as i", "r.id", "i.resource_id")
    .select("r.id", "r.resource_name", "i.resource_step", "i.instructions")
    .where({ resource_id: id });
}

function getShoppingList(id) {
  return db("resource as r")
    .join("resource_ingredients as ri", "ri.resource_id", "r.id")
    .join("ingredient as i", "i.id", "ri.ingredient_id")
    .select(
      "r.id",
      "r.resource_name",
      "i.ingredient_name",
      "ri.ingredient_quantity"
    )
    .where({ resource_id: id });
}
// GET /api/ingredients/:id/recipes: all recipes in the system that utilize a single ingredient
function getResourceByIngredientId(id) {
  return db("ingredient as i")
    .join("resource_ingredients as ri", "ri.ingredient_id", "i.id")
    .join("resource as r", "r.id", "ri.resource_id")
    .select("r.resource_name", "i.ingredient_name")
    .where({ ingredient_id: id });
}

module.exports = {
  getResource,
  getResourceById,
  getShoppingList,
  getInstructions,
  getResourceByIngredientId
};