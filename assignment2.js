// =============================
// Question 1: Even Numbers
// =============================

console.log("Even Numbers from 1 to 100:");
for (let i = 2; i <= 100; i += 2) {
    console.log(i);
}


// =============================
// Question 2: Calculator
// =============================

console.log("\nQuestion 2: Calculator");
function calculator(num1, num2, operator) {
    switch (operator) {
        case '+': return num1 + num2;
        case '-': return num1 - num2;
        case '*': return num1 * num2;
        case '/':
            return num2 !== 0 ? num1 / num2 : "Cannot divide by zero";
        default:
            return "Invalid operator";
    }
}

console.log("Addition:", calculator(10, 5, '+'));


// =============================
// Question 3: Tax Calculator
// =============================

console.log("\nQuestion 3: Tax Calculator");
function findTax(salary) {
    switch (true) {
        case (salary > 0 && salary <= 500000): return 0;
        case (salary > 500000 && salary <= 1000000): return salary * 0.10;
        case (salary > 1000000 && salary <= 1500000): return salary * 0.20;
        case (salary > 1500000): return salary * 0.30;
        default: return "Invalid salary amount";
    }
}

console.log("Tax on 800000:", findTax(800000));


// =============================
// Question 4: Sum of Products
// =============================

console.log("\nQuestion 4: Sum of Products");
function sumOfProducts(n1, n2) {
    n1 = Math.abs(n1);
    n2 = Math.abs(n2);

    let sum = 0;

    while (n1 > 0 || n2 > 0) {
        let digit1 = n1 % 10;
        let digit2 = n2 % 10;

        sum += digit1 * digit2;

        n1 = Math.floor(n1 / 10);
        n2 = Math.floor(n2 / 10);
    }

    return sum;
}

console.log("Sum of Products:", sumOfProducts(6, 34));
