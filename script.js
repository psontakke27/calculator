
const display = document.getElementById('display');


const buttons = document.querySelectorAll('button');
buttons.forEach(button => button.addEventListener('click', handleClick));


function handleClick(event) {
  const buttonValue = event.target.innerText;
  
 
  if (buttonValue === '=') {
    calculate();
  } else if (buttonValue === 'C') {
    clear();
  } else if (buttonValue === '←') {
    backspace();
  } else {
    addToDisplay(buttonValue);
  }
}


function addToDisplay(value) {
  display.value += value;
}


function clear() {
  display.value = '';
}


function backspace() {
  display.value = display.value.slice(0, -1);
}


function calculate() {
  try {

    const result = eval(display.value);
    display.value = result;

  } catch (error) {

    display.value = 'Error';
    
  }

}
