//      map
// using double, triple 
/*
const arr = [5, 1, 3, 2, 6]

function double(x){
    return x * 2;
}


function triple(x){
    return x * 3;
}


const output= arr.map(triple);

console.log(output);
*/


//      Binary
/*
const arr = [5, 1, 3, 2, 6];

const output = arr.map((x) => x.toString(2));

console.log(output);
*/


//             Filter 
//Print odd number

const arr = [7, 1, 9, 4, 8]

const output = arr.filter((x)=> x %2);
console.log(output);



// print even number
/*
const output = arr.filter((x)=> x %2 === 0);
console.log(output);
*/

//greater than 4

/*
const output = arr.filter((x)=> x > 4);
console.log(output);
*/



//                    REDUCE           //
/*
const arr = [7, 1, 9, 4, 8];

const output = arr.reduce(function(acc, curr) {
    if(curr>acc){
        acc=curr;
    }
    return acc;
}, 0);
console.log(output);
*/
