// print from 1 to 10
/*
let i;
for(i=0; i<10;i++){
    console.log(i)
}
*/

/*
const fruits = ["Apple", "Banana", "Orange"];
for (x of fruits) {
  console.log(x);
}
*/

//                      push                / /
/*
const fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.push("Kiwi");
console.log(fruits)


const fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.push("Kiwi", "Lemon", "Pineapple");
console.log(fruits)
*/

//         pop //
/*
fruits = ['apple', 'banana', 'cherry']

x = fruits.pop(1)
console.log(x)
*/

//                               splice function                                 //
// we have to remove a string and add 2 more string in it 
/*
const fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.splice(2, 1, "Lemon", "Kiwi");
console.log(fruits)





let fruits = ["Banana", "Orange", "Apple", "Mango", "Kiwi"];
fruits.splice(2, 2);
console.log(fruits)
*/

//                         slice function                                          //
/*
const fruits = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
const citrus = fruits.slice(1, 3);
console.log(citrus)
*/

/*
const fruits = ["Banana", "Orange", "dragon-fruit", "Apple", "Mango"];
const myFruits = fruits.slice(-1, 1);
console.log(myFruits)
*/

//      split    //

//  if we need a specific word from a sentece//
/*
let text = "How are you doing today?";
const myArray = text.split(" ");
let word = myArray[1];
console.log(word)
*/

//    if we need to split the whole sentence   //
/*
let text = "How are you doing today?";
const myArray = text.split(" ");
let word = myArray[1];
console.log(myArray)
*/

//  shift function(remove the first string from an array) //
/*
const fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.shift();
console.log(fruits)
*/

// unshift(add new element to an array) //

const fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.unshift("Lemon","Pineapple");
console.log(fruits)