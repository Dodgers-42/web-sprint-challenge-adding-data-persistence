

exports.up = async function(knex) {
    await knex.schema.createTable("task", (table) => {
        table.increments("id")
        table.text("name").notNull().unique()
        table.text("instructions").notNull()
    })
  
    await knex.schema.createTable("resource", (table)=> {
        table.increments("id")
        table.blob("resource").notNull()
    })
  
    await knex.schema.createTable("project", (table)=> {
        table.increments("id")
        table.text("name").notNull()
        table
            .integer("resource_id")
            .references("id")
            .inTable("resource")
            .onDelete("SET NULL")
            .onUpdate("CASCADE")
    })
  
    await knex.schema.createTable("task_project", (table)=> {
        table
            .integer("task_id")
            .references("id")
            .inTable("task")
            .onDelete("CASCADE")
            .onUpdate("CASCADE")
            .notNull()
  
        table
            .integer("project_id")
            .references("id")
            .inTable("project")
            .onDelete("CASCADE")
            .onUpdate("CASCADE")
            .notNull()

        table 
            .integer("resource_id")
            .references("id")
            .inTable("resource")
            .onDelete("CASCADE")
            .onUpdate("CASCADE")
            .notNull()
          
        table.primary(["task_id", "project_id"])
  
  
    })
  
  
  
  };
  
  exports.down = async function(knex) {
      await knex.schema.dropTableIfExists("task_project")
      await knex.schema.dropTableIfExists("project")
      await knex.schema.dropTableIfExists("resource")
      await knex.schema.dropTableIfExists("task")
    
  };