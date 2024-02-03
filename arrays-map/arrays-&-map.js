//1 (merging arrays into a single array)
let arr=[];
function arrFunction(arr1,arr2) {
 arr =[...arr1, ... arr2];

return arr;

}
console.log(arrFunction([11,12],[13,14]));

// 2 (to print the largest number)
const numbers1 = [5, 29, 55, 13, 9];
let max = numbers1[0];

for (let i = 1; i < numbers1.length; i++) {
  if (numbers1[i] > max) {
    max = numbers1[i];
  }
}

console.log(max);

//3 (to print even number)
const numbers = [1, 4, 2, 7, 6];
const evenNumbers = numbers.filter(num => num % 2 === 0);

console.log(evenNumbers); 

//4  (to split whole sentence) 
let texts = "How are you doing today?";
const myArray = texts.split(" ");
let word = myArray[1];
console.log(myArray)

// object destruction

const person = { name: "samridh", age: 22, city: "chennai" };

const { name, age, city } = person;

console.log(name);  
console.log(age);   
console.log(city);

// array destruction

const number = [1, 2, 3, 4, 5];

const [first, second, ...rest] = number;

console.log(first);  
console.log(second); 
console.log(rest); 

// push function 

const naam = ["raj", "kiran", "tyagi", "kumar"];
naam.push("singh");
console.log(naam)


const fruit = ["Banana", "Orange", "Apple", "Mango"];
fruit.push("Kiwi", "Lemon", "Pineapple");
console.log(fruit)


// Maps
//1
const user = new Map();
user.set("name", "Samridh Gupta");
user.set("email", "samridhgupta1053@gmail.com");
user.set("age", 22);

console.log(user.get("name")); 
console.log(user.get("email")); 
console.log(user.get("age")); 

// 2 (split each and every word)
const text = "Hello to my world.";
const wordCounts = new Map();

for (const word of text.split(" ")) {
  wordCounts.set(word, (wordCounts.get(word) || 0) + 1);
}

console.log(wordCounts); 


// double and triple the given array
const ar = [5, 1, 3, 2, 6]

function double(x){
    return x * 2;
}

function triple(x){
    return x * 3;
}

const out= ar.map(triple);
console.log(out);


 //             Filter 
//Print odd number

const array = [1, 2, 3, 4, 5, 6, 7, 8, 9]

const outputs = array.filter((x)=> x %2);
console.log(outputs);


//greater than 4

const output = array.filter((x)=> x > 5);
console.log(output);