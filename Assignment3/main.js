// Assignment 3
// Name Cases: Store a person’s name in a variable, and then print that person’s name in lowercase, uppercase, and titlecase.
var personName = "Areeba";
// In Lowercase:
console.log("lowercase:", personName.toLowerCase());
// In uppercase:
console.log("uppercase:", personName.toUpperCase());
// In titlecase:
console.log("titlecase:", personName.replace(/\b\w/g, function (c) { return c.toUpperCase(); }));
