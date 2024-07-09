"use strict";
//29. Favorite Fruit: Make a array of your favorite fruits, and then write a series of independent if statements that check for certain fruits in your array.
//* Make a array of your three favorite fruits and call it favorite_fruits.
//* Write five if statements. Each should check whether a certain kind of fruit is in your array. If the fruit is in your array, the if block should print a statement,
//such as You really like bananas!
Object.defineProperty(exports, "__esModule", { value: true });
let favorite_fruits = ["Mango", "Apple", "Grapes"];
if (favorite_fruits.includes("Mango")) {
    console.log("I like Mango.");
}
if (favorite_fruits.includes("orange")) {
    console.log("I like orange.");
}
if (favorite_fruits.includes("Apple")) {
    console.log("I like Apple.");
}
if (favorite_fruits.includes("Grapes")) {
    console.log("I like Grapes.");
}
if (favorite_fruits.includes("Banana")) {
    console.log("I like Banana.");
}
