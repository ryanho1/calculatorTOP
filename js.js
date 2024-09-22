    const screen = document.getElementById("screen");
    const clear = document.getElementById("delete");
    const calculate = document.getElementById("calculate");
    const keys = document.querySelectorAll('.keys');
    let userInput = "";
    let result = Number;
    let MathError = Number + "/0";

    keys.forEach(button => button.addEventListener('click',() => {
      let buttonContent = button.textContent;
      screen.value += buttonContent;
  }));
// if arr.length === 1, return "FINISH THE EQUATION!!!"
//if input is juist an operand, then return "an error too!"

      calculate.addEventListener('click', () => {
      if (screen.value.includes('/0')){
        screen.value = "Math Error";
      } else if (screen.value.length <= 2) {
        screen.value = 'FINISH THE BLOODY EQUATION' 
      } else {
        userInput = screen.value;
      }

    const userInputObjectForm = userInput.split(/[/*-+]/);
    const filteredNumberStrings = userInputObjectForm.filter(Number);
    const filteredNumberIntegers = filteredNumberStrings.map(Number);

    clear.addEventListener('click', () => {
        screen.value = '';
    })


    
    //finding errors just delete this and it will be fine
      // if (filteredNumberStrings.length <= 3) {
      //   console.log('c');
      //   screen.value = 'FINISH THE BLOODY EQUATION' 
      // } 

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