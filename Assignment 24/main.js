"use strict";
// 24.More Conditional Tests: You don’t have to limit the number of tests you create to 10. If you want to try more comparisons, write more tests. Have at least one True and one False result for each of the following:
// • Tests for equality and inequality with strings
// • Tests using the lower case function
// • Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to
// • Tests using "and" and "or" operators
// • Test whether an item is in a array
// • Test whether an item is not in a array
let student = "Abdullah";
// test for equality
console.log("The student is equal toAbdullah");
console.log(student == "Abdullah");
// test for inequality
console.log("The student is not equal to Abdullah");
console.log(student !== "Abdullah");
// • Tests using the lower case function
let uppercaseStudent = "ABDULLAH";
console.log("ABDULLAH is equal to abdullah after converting to lowercase");
console.log(uppercaseStudent.toLocaleLowerCase() == "abdullah");
console.log("ABDULLAH is not equal to abdullah after converting to lowercase");
console.log(uppercaseStudent.toLocaleLowerCase() !== "abdullah");
// • Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to
let seven = 7;
let eight = 8;
//   for equality
console.log("seven is equal to eight");
console.log(seven == eight);
// foe inequality
console.log("seven is not equal to eight");
console.log(seven !== eight);
// for greater than 
console.log("eight is greater than seven");
console.log(eight > seven);
// foe less than
console.log("seven is less than eight");
console.log(seven < eight);
// greater than or equal to
console.log("eight is  greater than or equal to seven");
console.log(eight >= seven);
// less than or equal to
console.log("eight is  less than or equal to seven");
console.log(eight <= seven);
// • Tests using "and" and "or" operators
// using && (and)
console.log("eight is not equal to seven and eight is greater than seven");
console.log(eight !== seven && eight > seven);
console.log("eight is not equal to seven and eight is less than seven");
console.log(eight !== seven && eight < seven);
// using || (or)
console.log("eight is not equal to seven or eight is equal to  eight");
console.log(eight !== seven || eight == eight);
console.log("eight is  equal to seven or eight is greater than seven");
console.log(eight == seven || eight > seven);
// • Test whether an item is in a array
let animals = ["lions", "cheetah", "zebra"];
console.log("Cheetah is include in our array ");
console.log(animals.includes("cheetah"));
// • Test whether an item is not in a array
console.log("lions is not include in my  array");
console.log(animals.includes("lions"));
