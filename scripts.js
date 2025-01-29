document.addEventListener('DOMContentLoaded', function() {
    const display = document.getElementById('screen');
    const buttons = document.querySelectorAll('.butt');
    let currentInput = '';
    let operator = '';
    let firstOperand = '';
    let secondOperand = '';

    buttons.forEach(button => {
        button.addEventListener('click', function() {
            const value = this.getAttribute('data-value');

            if (value === 'C') {
                currentInput = '';
                operator = '';
                firstOperand = '';
                secondOperand = '';
                display.textContent = '';
            } else if (value === '=') {
                secondOperand = currentInput;
                display.textContent = calculate(firstOperand, operator, secondOperand);
                currentInput = display.textContent;
                operator = '';
                firstOperand = '';
                secondOperand = '';
            } else if (['+', '-', '*', '/'].includes(value)) {
                operator = value;
                firstOperand = currentInput;
                currentInput = '';
                display.textContent = firstOperand + ' ' + operator;
            } else {
                currentInput += value;
                display.textContent = firstOperand + ' ' + operator + ' ' + currentInput;
            }
        });
    });

    function calculate(first, operator, second) {
        const num1 = parseFloat(first);
        const num2 = parseFloat(second);
        switch (operator) {
            case '+':
                return num1 + num2;
            case '-':
                return num1 - num2;
            case '*':
                return num1 * num2;
            case '/':
                return num1 / num2;
            default:
                return 0;
        }
    }
});