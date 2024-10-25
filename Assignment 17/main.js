"use strict";
// Shrinkinng Guest List: You jsut found out that ypur new dinner table won't arrive in time for the dinner,  and you have space for only two guests.
let guest_list = ["Emaan", "Areesha", "Ahmed", "Ambreen", "Sana", "Bilal"];
// Urgent message
console.log("Sorry guys! we won't arrive in time for dinner, so we can invite only two friends for dinner.");
// shrink the guestlist
while (guest_list.length > 2) {
    let uninvited_guest = guest_list.pop();
    if (uninvited_guest !== undefined) {
        console.log(`sorry! ${uninvited_guest} we can't invite you.`);
    }
}
// message for invited friends
guest_list.forEach(guest => {
    console.log(`My Dear ${guest}, you are still invited to dinner.`);
});
// empty list
guest_list.splice(0, 2);
// print empty list
console.log("Updated list of guest", guest_list);
