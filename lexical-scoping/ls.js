// lexacial scoping  
/*
function shadowingExample() {
    let variable = "Outer Variable";
  
    if (true) {
      let variable = "Inner Variable";
      console.log(variable); 
    }
  
    console.log(variable); 
  }
  
  shadowingExample();
  */

  function lexicalVisibility() {
    let outerVariable = "I am from the outer function world ^^";
  
    function inner() {
      console.log(outerVariable);
    }
  
    inner(); // Outputs: "I am from the outer function"
  }
  
  lexicalVisibility();