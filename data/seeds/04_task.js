exports.seed = async function(knex) {
    // Deletes ALL existing entries
    await knex("task").insert([
      {name: "painting a room" , instructions:"Setting up the ladder, taping off the room to make sure you don't make any mistakes, laying don to tarp to cover things to make sure you don't make a mess, pouring the paint into a container, use a brush to apply the paint, wiping up any mistakes, cleaning up after you are done."},
      {name: "painting facia on the house", instructions:"Setting up the ladder, taping off the wood to make sure you don't make any mistakes, pouring the paint into a container, use a brush to apply the paint, wiping up any mistakes, cleaning up after you are done."},
      {name: "trimming a tree" , instructions:"Setting up the ladder, getting the cutting tools from the shed, cutting donw the trims that need trimming, cutting the limbs into smaller pieces to fit into the trash can, putting the tools away. "},
      
    ])
   
  };