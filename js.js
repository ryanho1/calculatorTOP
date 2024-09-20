    // const screen = document.getElementById("screen");
    // const clear = document.getElementById("delete");

    // function inputOnScreen(input) {
    //     screen.value += input;
    // }

    // clear.addEventListener('click', () => {
    //     screen.value = '';
    // })
  
  const add = function(input1,input2) {
    let newValue = input1 + input2;
    return newValue;
  };

  console.log(add(3,5));
  
  const subtract = function(input1,input2) {
    let newValue = input1 - input2;
    return newValue;
  };

  console.log(subtract(3,5));
  
  const multiply = function(input1,input2) {
  let newValue = input1 * input2;
  return newValue;
  };

  console.log(multiply(3,5));

  const divide = function(input1,input2) {
    let newValue = input1 / input2;
    return newValue;
  };

  console.log(divide(3,2))
  