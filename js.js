    const screen = document.getElementById("screen");
    const clear = document.getElementById("delete");
    const calculate = document.getElementById("calculate");
    const keys = document.querySelectorAll('.keys');
    let userInput = "";
    let result = Number;
    let MathError = Number + "/0";
    
    calculate.setAttribute("style", "width:90px; height:90px; font-size: 30px; font-weight:800; border-radius: 50px; cursor: pointer;");
    clear.setAttribute("style", "width:90px; height:90px font-size: 30px; font-weight:800; border-radius: 50px; cursor: pointer;");

    keys.forEach(button => button.addEventListener('click',() => {
      let buttonContent = button.textContent;
      screen.value += buttonContent;
  }));

      calculate.addEventListener('click', () => {
      if (screen.value.includes('/0')){
        screen.value = "Math Error";
      } else if (screen.value.length <= 2) {
        screen.value = 'FINISH THE BLOODY EQUATION' 
      } else {
        userInput = screen.value;
      }

    const userInputObjectForm = userInput.split(/[/*+-]/);
    const filteredNumberStrings = userInputObjectForm.filter(Number);
    const filteredNumberIntegers = filteredNumberStrings.map(Number);

    clear.addEventListener('click', () => {
        screen.value = '';
    })

    //operator logic
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
    let newValue = filteredNumberIntegers.reduce(function(total, num) 
        {return total / num});
    return newValue;
  };

  const add = function(filteredNumberIntegers) {
    let newValue = filteredNumberIntegers.reduce(function(total, num) {return total + num}, 0);
    return newValue;
    };
function operate(userInput) {
  if (userInput.includes('/')) {
    result = divide(filteredNumberIntegers);
    screen.value = Math.round(result * 100) / 100;
  } else if (userInput.includes('*')) {
    result = multiply(filteredNumberIntegers);
    screen.value = Math.round(result * 100) / 100;
  } else if (userInput.includes("-")) {
    result = subtract(filteredNumberIntegers);
    screen.value = Math.round(result * 100) / 100;
  } else if (userInput.includes("+")){
    result = add(filteredNumberIntegers);
    screen.value = Math.round(result * 100) / 100;
   }
};

(operate(userInput));
})




// bug: doesnt work with multiple operators
// 