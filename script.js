const display = document.getElementById('display');
const buttons = document.querySelectorAll('.btn');
const equals = document.getElementById('equals');
const clear = document.getElementById('clear');

let currentInput = '';
let previousInput = '';
let operator = '';

function updateDisplay(value) {
  display.textContent = value || '0';
}

buttons.forEach(button => {
  button.addEventListener('click', () => {
    const value = button.getAttribute('data-value');
    if (!isNaN(value) || value === '.') {
      currentInput += value;
      updateDisplay(currentInput);
    } else if (['+', '-', '*', '/'].includes(value)) {
      if (currentInput) {
        previousInput = currentInput;
        currentInput = '';
      }
      operator = value;
    }
  });
});

equals.addEventListener('click', () => {
  if (currentInput && previousInput && operator) {
    const result = eval(`${previousInput} ${operator} ${currentInput}`);
    updateDisplay(result);
    currentInput = result.toString();
    previousInput = '';
    operator = '';
  }
});

clear.addEventListener('click', () => {
  currentInput = '';
  previousInput = '';
  operator = '';
  updateDisplay('');
});
