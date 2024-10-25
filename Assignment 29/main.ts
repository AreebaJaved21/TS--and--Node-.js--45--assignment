// 29.Favorite Fruit: Make a array of your favorite fruits, and then write a series of independent if statements that check for certain fruits in your array.
// • Make a array of your three favorite fruits and call it favorite_fruits.

// • Write five if statements. Each should check whether a certain kind of fruit is in your array. If the fruit is in your array, the if block should print a statement, such as You really like bananas!

let favorite_fruit = ["apple", "mango", "banana"]

if (favorite_fruit.includes("apple")) {
    console.log("I really like apples ");
}

if (favorite_fruit.includes("strawberry")) {
    console.log("I really like strawberry ");
}
if (favorite_fruit.includes("mango")) {
    console.log("I really like mango ");
}
if (favorite_fruit.includes("banana")) {
    console.log("I really like banana ");
}
if (favorite_fruit.includes("kiwi")) {
    console.log("I really like kiwi ");
}