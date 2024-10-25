//17. Shrinking Guest List: You just found out that your new dinner table won’t arrive in time for the dinner, and you have space for only two guests.
// • Start with your program from Exercise 16. Add a new line that prints a message saying that you can invite only two people for dinner.

// • Remove guests from your list one at a time until only two names remain in your list. Each time you pop a name from your list, print a message to that person letting them know you’re sorry you can’t invite them to dinner.

// • Print a message to each of the two people still on your list, letting them know they’re still invited.

// • Remove the last two names from your list, so you have an empty list. Print your list to make sure you actually have an empty list at the end of your program.


let guest_list :string[] =["Emaan","Areesha" ,"Ahmed","Ambreen","Sana","Bilal"]

 // Urgent message
  console.log("Sorry guys! we won't arrive in time for dinner, so we can invite only two friends for dinner.")

    // shrink the guestlist
    while( guest_list.length>2 ){
      let uninvited_guest : string|unknown =guest_list.pop()
      if (uninvited_guest !== undefined){
        console.log(`sorry! ${uninvited_guest} we can't invite you.`);
        
      }
    }
  // message for invited friends
  guest_list.forEach(guest =>{
      console.log(`My Dear ${guest}, you are still invited to dinner.`)})

      // empty list
      guest_list.splice(0,2)

      // print empty list
      console.log("Updated list of guest",guest_list);
      