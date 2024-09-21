    // const screen = document.getElementById("screen");
    // const clear = document.getElementById("delete");

    // function inputOnScreen(input) {
    //     screen.value += input;
    // }

    // clear.addEventListener('click', () => {
    //     screen.value = '';
    // })

    let input1 = Number;
    let input2 = Number;

    let userInput = "2+2-1+5";
    const userInputObjectForm = userInput.split(/[+-/*]/);
    console.log(userInputObjectForm);
    const filteredNumberStrings = userInputObjectForm.filter(Number);
    const filteredNumberIntegers = filteredNumberStrings.map(Number);
    console.log(filteredNumberIntegers);

  const subtract = function(filteredNumberIntegers) {
    if (filteredNumberIntegers.length === 0) return 0;
    let newValue = filteredNumberIntegers.reduce(function(total, num) {return total - num});
    return newValue;
  };
  
  const multiply = function(filteredNumberIntegers) {
    let newValue = filteredNumberIntegers.reduce(function(total, num) {return total * num}, 1);
    return newValue;
  };

  const divide = function(filteredNumberIntegers) {
    let newValue = filteredNumberIntegers.reduce(function(total, num) {return total / num});
    return newValue;
  };

  // do reduce function for all operand functions, then test with /[+-/*]/

  const add = function(filteredNumberIntegers) {
    let newValue = filteredNumberIntegers.reduce(function(total, num) {return total + num});
    return newValue;
    };

function operate(userInput) {
  if (userInput.includes('/')) {
    return divide(filteredNumberIntegers)
  } else if (userInput.includes('*')) {
    return multiply(filteredNumberIntegers)
  } else if (userInput.includes("-")) {
    return subtract(filteredNumberIntegers)
  } else if (userInput.includes("+")){
    return add(filteredNumberIntegers);
   }
}

console.log(operate(userInput))

//get user input
// filter it by number
// create a new array with filtered numbers, then put those into the parameters
// then scan if user input has "+,-,x,/"
// then call function based on that