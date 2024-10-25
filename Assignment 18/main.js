"use strict";
// 18. Seeing the world: Think of at least five places in the world you'd like to visit.
// store the location in a array
let Favorite_places = ["China", "London", "Canada", "England", "America"];
// print the array in its original array
console.log("Original order:", Favorite_places);
// print  array in alphabetical order
console.log("Alphabetical order:", Favorite_places.slice().sort());
// print the array to show that is still in its original order
console.log("Original order after sorting :", Favorite_places);
// print array in reverse alphabetical order
console.log("Reverse Alphabetical order:", Favorite_places.slice().sort().reverse());
//again print the array to show that is still in its original order
console.log("Original order again:", Favorite_places);
// Reverse the order of list
Favorite_places.reverse();
// printing reversed order list
console.log("Reversed order list:", Favorite_places);
// Reverse the order of list again
Favorite_places.reverse();
// printing reversed order list
console.log("Reversed order list again:", Favorite_places);
// sort array in alphabetical order
console.log("Sorted array:", Favorite_places.slice().sort());
// sort to change array so it's stored in reverse alphabetical order
console.log(" Sorted In Reverse Alphabetical Order:", Favorite_places.slice().sort().reverse());
