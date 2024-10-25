"use strict";
// 41.Magicians: Make a array of magician’s names. Pass the array to a function called show_magicians(), which prints the name of each magician in the array.
function show_magicians(magician) {
    magician.forEach(name => console.log(name));
}
let magicians_names = ["ali", "zara", "sara"];
show_magicians(magicians_names);
