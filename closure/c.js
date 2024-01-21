// Yes, closures can be used to create private variables in JavaScript.


function createCounter() {
    let count = 0;
  
    return function() {
      count++;
      console.log(count);
    };
  }
  
  const counter = createCounter();
  counter(); 
  counter();
  counter();

// Closures are often used in asynchronous operations to capture variables in the callback functions.

  function asyncOperation() {
    let result = "Initial result";
  
    setTimeout(function() {
      result = "Updated result";
      console.log(result);
    }, 1000);
  }
  
  asyncOperation();


  // A closure is a function that has access to variables from its outer (enclosing) scope,
// even after the outer function has finished executing.

  function outerFunction() {
    let outerVariable = "I am from the outer function";
    
    function innerFunction() {
      console.log(outerVariable);
    }
  
    return innerFunction;
  }
  
  const closureExample = outerFunction();
  closureExample();