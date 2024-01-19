// practise

// #1

//    console.log('start')

//    setTimeout(() =>{
//        console.log('setTimeout')
//    })
//    Promise.resolve().then(() =>{
//        console.log('resolve')
//    })
//    console.log('end')

// #2
/*
console.log('start');

const promise1 = new Promise((resole, reject) =>{
    console.log(1)
})
console.log('end')

*/

// #3
/*
console.log('start')

setTimeout(() => {
    console.log('setTimeout')
})
Promise.resolve().then(() =>{ 
    console.log('resolve')
})
console.log('end')
*/

// #4
/*
const executionFn = (resolve, reject) =>{
    console.log('The executor function of the promise!');
};
const promise= new Promise(executionFn);
*/

// #5
/*
let promise = new Promise(function (resolve, reject) {
    const x = "1001";
    const y = "1001"
    if (x === y) {
        resolve();
    } else {
        reject();
    }
});
*/

// #6

const promise = new Promise((resolve, reject) => {
    reject(Error('Some error occurred'));
  })
  promise.catch(error => console.log(error.message));