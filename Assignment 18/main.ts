//18. Seeing the World: Think of at least five places in the world you’d like to visit.
// • Store the locations in a array. Make sure the array is not in alphabetical order.

// • Print your array in its original order.

// • Print your array in alphabetical order without modifying the actual list.

// • Show that your array is still in its original order by printing it.

// • Print your array in reverse alphabetical order without changing the order of the original list.

// • Show that your array is still in its original order by printing it again.

// • Reverse the order of your list. Print the array to show that its order has changed.

// • Reverse the order of your list again. Print the list to show it’s back to its original order.

// • Sort your array so it’s stored in alphabetical order. Print the array to show that its order has been changed.

// • Sort to change your array so it’s stored in reverse alphabetical order. Print the list to show that its order has changed.


// store the location in a array
let Favorite_places :string[]= ["China", "London", "Canada", "England", "America"]

// print the array in its original array
console.log("Original order:",Favorite_places);

// print  array in alphabetical order
console.log("Alphabetical order:",Favorite_places.slice().sort());

// print the array to show that is still in its original order
console.log("Original order after sorting :",Favorite_places);

// print array in reverse alphabetical order
console.log("Reverse Alphabetical order:",Favorite_places.slice().sort().reverse());



//again print the array to show that is still in its original order
console.log("Original order again:",Favorite_places);

// Reverse the order of list
Favorite_places.reverse()
// printing reversed order list
console.log("Reversed order list:",Favorite_places);

// Reverse the order of list again
Favorite_places.reverse()
// printing reversed order list
console.log("Reversed order list again:",Favorite_places);

// sort array in alphabetical order
console.log("Sorted array:",Favorite_places.slice().sort());

// sort to change array so it's stored in reverse alphabetical order
console.log(" Sorted In Reverse Alphabetical Order:",Favorite_places.slice().sort().reverse());

