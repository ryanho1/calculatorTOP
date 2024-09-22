    const screen = document.getElementById("screen");
    const clear = document.getElementById("delete");
    const calculate = document.getElementById("calculate");
    const keys = document.querySelectorAll('.keys');
    let userInput = "";
    let result = Number;

    keys.forEach(button => button.addEventListener('click',() => {
      let buttonContent = button.textContent;
      screen.value += buttonContent;
      console.log(screen.value);
  }));

      calculate.addEventListener('click', () => {
      userInput = screen.value;

    clear.addEventListener('click', () => {
        screen.value = '';
    })
//})
//}

    const userInputObjectForm = userInput.split(/[+-/*]/);
    console.log(userInputObjectForm)
    const filteredNumberStrings = userInputObjectForm.filter(Number);
    const filteredNumberIntegers = filteredNumberStrings.map(Number);

    //operand logic
  const subtract = function(filteredNumberIntegers) {
    if (filteredNumberIntegers.length === 0) return 0;
    let newValue = filteredNumberIntegers.reduce(function(total, num) {return total - num});
    return newValue;
  };
  
  const multiply = function(filteredNumberIntegers) {
    let newValue = filteredNumberIntegers.reduce(function(total, num) {return total * num});
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
// something here, perhaps make it += or something like that with screen.value (assign function to var, then += with said var)
function operate(userInput) {
  if (userInput.includes('/')) {
    result = divide(filteredNumberIntegers);
    screen.value = result;
  } else if (userInput.includes('*')) {
    result = multiply(filteredNumberIntegers);
    screen.value = result;
  } else if (userInput.includes("-")) {
    result = subtract(filteredNumberIntegers);
    screen.value = result;
  } else if (userInput.includes("+")){
    result = add(filteredNumberIntegers);
    screen.value = result;
   }
};

(operate(userInput));
})




// bug: doesnt work with multiple operators
// 