    const screen = document.getElementById("screen");
    const clear = document.getElementById("delete");
    const calculate = document.getElementById("calculate");
    const keys = document.querySelectorAll('.keys');
    let userInput = "";

    keys.forEach(button => button.addEventListener('click',() => {
      let buttonContent = button.textContent;
      screen.value += buttonContent;
  }));

      calculate.addEventListener('click', () => {
      userInput = screen.value;

    clear.addEventListener('click', () => {
        screen.value = '';
    })
//})
//}
    //create a userInput with input, so add the strings together (7 + 7) then boom
    //then return function on screen.value im going to assume

    const userInputObjectForm = userInput.split(/[+-/*]/);
    console.log(userInput);
    // console.log(userInputObjectForm);
    const filteredNumberStrings = userInputObjectForm.filter(Number);
    const filteredNumberIntegers = filteredNumberStrings.map(Number);
    // console.log(filteredNumberIntegers);

    //operand logic
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

  const add = function(filteredNumberIntegers) {
    let newValue = filteredNumberIntegers.reduce(function(total, num) {return total + num}, 0);
    return newValue;
    };

function operate(userInput) {
  if (userInput.includes('/')) {
    return divide(filteredNumberIntegers) // something here, perhaps make it += or something like that with screen.value (assign function to var, then += with said var)
  } else if (userInput.includes('*')) {
    return multiply(filteredNumberIntegers)
  } else if (userInput.includes("-")) {
    return subtract(filteredNumberIntegers)
  } else if (userInput.includes("+")){
    return add(filteredNumberIntegers);
   }
};

console.log(operate(userInput));
})




// bug: doesnt work with multiple operators
// 