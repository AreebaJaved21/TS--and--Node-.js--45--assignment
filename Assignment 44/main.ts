// 44.Sandwiches: Write a function that accepts a array of items a person wants on a sandwich. The function should have one parameter that collects as many items as the function call provides, and it should print a summary of the sandwich that is being ordered. Call the function three times, using a different number of arguments each time.

function making_sandwich(...ingredients: string[] ){
    console.log("\nMaking a sandwich with these following ingredients:\n");
 ingredients.forEach(singleingredient =>
    console.log(singleingredient)
 )
 console.log("\nEnjoy Your Sandwich\n");
 
 }
  making_sandwich("Bread","Butter","Chicken")
  making_sandwich("Bread","Butter","Beef","tomato","ketchup")
  making_sandwich("Bread","Butter","Chicken","cucumber","Mayo","egg")