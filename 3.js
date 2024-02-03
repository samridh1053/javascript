// 1) Suppose u have given an array concat([1, 2, 3], [4, 5], [6, 7]) ➞ [1, 2, 3, 4, 5, 6, 7]. now u have to print those array in a single array using functions.
/*
let arr=[];
function arrFunction(arr1,arr2) {
 arr =[...arr1, ... arr2];

return arr;

}
console.log(arrFunction([11,12],[12,13]));
*/

// array of object
/*
let arrayOfObjects = [
    { name: 'samridh', age: 22},
    { name: 'jay', age: 23 }
  ];
  
  
  console.log(arrayOfObjects[0]);
  */



   // Convert the number to a string and calculate its length
   /*
  function countDigits(number) {
    
    const digitCount = String(number).length;
    return digitCount;
  }

  console.log(countDigits(1234));
  console.log(countDigits(123));
  */

  // object destruction

  const person = { name: "samridh", age: 22, city: "chennai" };

const { name, age, city } = person;

console.log(name);  
console.log(age);   
console.log(city);

// array destruction

const numbers = [1, 2, 3, 4, 5];

const [first, second, ...rest] = numbers;

console.log(first);  
console.log(second); 
console.log(rest); 