/*
let arr1 =[10, 20, 30];
let arr2 =[40, 50, 60];
let arr3 = [...arr1,...arr2];
console.log(arr3);
*/

/*
let numbers = [1, 2, 3, 4, 5];

let evenNumbers = numbers.filter(function(number) {
  return number % 2 === 0;
});

console.log(evenNumbers);
*/
//         pop function   //

/*
let myArray = [1, 2, 3, 4];
let removedElement = myArray.pop();
console.log(removedElement)
*/

//         push function             //
/*
let myArray = [1, 2, 3];
myArray.push(4);
console.log(myArray);
*/

// regular funtion
function regularFunction(x) {
  return x * 2;
}

// Arrow function
const arrowFunction = x => x * 2;

console.log(regularFunction(5));   // Output: 10
console.log(arrowFunction(5));

//         ES6         
const person = { firstName: "Samridh", lastName: "Gupta" };

const { firstName, lastName } = person;
console.log(firstName, lastName);




