"use strict";
//  Assignment 15
//  Changing Guest List: You just heard that one of your guests can’t make the dinner, so you need to send out a new set of invitations. You’ll have to think of someone else to invite.
// • Start with your program from Exercise 14. Add a print statement at the end of your program stating the name of the guest who can’t make it.
// • Modify your list, replacing the name of the guest who can’t make it with the name of the new person you are inviting.
// • Print a second set of invitation messages, one for each person who is still in your list.
let guest_list = ["Areeba", "Areesha", "Ambreen", "Alisha"];
// print the name who  cannot attend the dinner 
let unable_attend = guest_list.splice(0, 1)[0];
console.log(`${unable_attend}, is not invited for dinner`);
// push
guest_list.push("sana");
console.log(guest_list);
// messsge
guest_list.forEach(guest => {
    console.log(`My Dear ${guest}, you are invited for the  dinner `);
});
