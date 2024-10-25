// Assignment 13
// Your Own Array: Think of your favorite mode of transportation,such  as motorcycle or car, and make a list that stors several examples. Use your list to print a series of statements about these items. such as "i would like to own a Honda motorcycle."
var favoriteTransportation = ["Toyota", "Honda", "Civic", "BMW"];
// using map method
favoriteTransportation.map(function (items) { return console.log("I would like to own a ".concat(items, ".")); });
