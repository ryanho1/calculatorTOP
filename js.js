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
    let userInput = "8+6";
    const twoPlusFiveObj = Array.from(userInput);
    const filteredNumberStrings = twoPlusFiveObj.filter(Number);
    const filteredNumberIntegers = filteredNumberStrings.map(Number);
    console.log(filteredNumberIntegers);

  const add = function(input1,input2) {
    let newValue = input1 + input2;
    return newValue;
  };

  const subtract = function(input1,input2) {
    let newValue = input1 - input2;
    return newValue;
  };
  
  const multiply = function(input1,input2) {
  let newValue = input1 * input2;
  return newValue;
  };

  const divide = function(input1,input2) {
    let newValue = input1 / input2;
    return newValue;
  };

  //testing with reduce
  const addingTEST = function(filteredNumberIntegers) {
    let newValue = filteredNumberIntegers.reduce(function(total, num) {return total + num}, 0);
    return newValue;
    };

function operate(userInput) {
  if (userInput.includes("+")){
   return addingTEST(filteredNumberIntegers);
  }
}  

console.log(operate(userInput))

//get user input
// filter it by number
// create a new array with filtered numbers, then put those into the parameters
// then scan if user input has "+,-,x,/"
// then call function based on that