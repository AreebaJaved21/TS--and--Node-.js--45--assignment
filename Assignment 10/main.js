// Assignment 10
// Adding Comments: Choose two of the programs you’ve written, and add at least one comment to each. If you don’t have anything specific to write because your programs are too simple at this point, just add your name and the current date at the top of each program file. Then write one sentence describing what the program does.
// author: [Areeba Javed]
// Date : [18-9-2024]
// storing personName in variable
var personName = "Areeba";
//  printing personName in lowercase
// In Lowercase:
console.log("lowercase:", personName.toLowerCase());
//  printing personName in uppercase
// In uppercase:
console.log("uppercase:", personName.toUpperCase());
//  printing personName in titlecase
// In titlecase:
console.log("titlecase:", personName.replace(/\b\w/g, function (c) { return c.toUpperCase(); }));
// author: [Areeba Javed]
// Date : [18-9-2024]
// storing favorite number in variable
var favoriteNumber = 5;
// printing favorite  nnumber 
console.log("My favorite number is ".concat(favoriteNumber));
