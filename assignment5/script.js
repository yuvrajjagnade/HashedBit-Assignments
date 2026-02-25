const num1Input = document.getElementById("num1");
const num2Input = document.getElementById("num2");
const resultBox = document.getElementById("result");
let lastOperator = "+";

function setResult(message, type) {
    resultBox.innerText = "Result: " + message;
    resultBox.classList.remove("success", "error");
    if (type) {
        resultBox.classList.add(type);
    }
}

function calculate(operator) {
    let n1 = parseFloat(num1Input.value);
    let n2 = parseFloat(num2Input.value);
    let result;
    lastOperator = operator;

    if (isNaN(n1) || isNaN(n2)) {
        setResult("Please enter valid numbers", "error");
        return;
    }

    if (operator === '+') {
        result = n1 + n2;
    } 
    else if (operator === '-') {
        result = n1 - n2;
    } 
    else if (operator === '*') {
        result = n1 * n2;
    } 
    else if (operator === '/') {
        if (n2 === 0) {
            setResult("Cannot divide by zero", "error");
            return;
        }
        result = n1 / n2;
    }

    setResult(result, "success");
}

function clearCalculator() {
    num1Input.value = "";
    num2Input.value = "";
    resultBox.classList.remove("success", "error");
    resultBox.innerText = "Result: ";
    num1Input.focus();
}

function handleEnter(event) {
    if (event.key === "Enter") {
        calculate(lastOperator);
    }
}

num1Input.addEventListener("keydown", handleEnter);
num2Input.addEventListener("keydown", handleEnter);
