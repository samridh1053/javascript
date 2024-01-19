/*
// An async function that returns a resolved Promise
async function asyncFunction() {
    return new Promise((resolve) => {
      resolve('Async function complete.');
    });
  }
  
  // Another async function that calls the first function using await
  async function callAsyncFunction() {
    console.log('Calling async function...');
    const result = await asyncFunction();
    console.log('Result:', result);
  }
  
  
  callAsyncFunction();
  */

  async function asyncFunction() {
    return new Promise((resolve) => {
      resolve('Hello to my World!');
    });
  }
  
  // Using await to get the result
  async function callAsyncFunction() {
    const result = await asyncFunction();
    console.log(result);
  }
  
  callAsyncFunction();
  
  