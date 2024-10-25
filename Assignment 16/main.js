"use strict";
//  Assignment 16
//  More Guests: You just found a bigger dinner table, so now more space is available. Think of three more guests to invite to dinner.
// • Start with your program from Exercise 15. Add a print statement to the end of your program informing people that you found a bigger dinner table.
// • Add one new guest to the beginning of your array.
// • Add one new guest to the middle of your array. • Use append() to add one new guest to the end of your list. • Print a new set of invitation messages, one for each person in your list.
let guest_list = ["Areesha", "Ambreen", "Sana"];
console.log("Here is a exciting news for all  of you! we found a bigger dinner table.");
//using unshift method
guest_list.unshift("Emaan");
console.log(guest_list);
// using  splice method
guest_list.splice(Math.floor(guest_list.length / 2), 0, "Ahmed");
console.log(guest_list);
// using push method
guest_list.push("Bilal");
console.log(guest_list);
// message for each person
guest_list.forEach(guest => {
    console.log(`My Dear ${guest}, you are invited to dinner.`);
});
