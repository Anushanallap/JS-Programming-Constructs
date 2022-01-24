//Write a program that computes a factorial of a number taken as input.

//5 Factorial – 5! = 1 * 2 * 3 * 4 * 5



function FactorialOfNumber(number) {
    if (number === 0)
        console.log("The factorial of " + number + " is 1")
    else if (number < 0)
        console.log("Invalid input");

    else if (number > 1) {
        let value = 1;
        for (i = 1; i <= number; i++) {
            value *= i;
        }
        console.log("The factorial of " + number + " is " + value);
    }
}

FactorialOfNumber(0); 
FactorialOfNumber(-2); 
FactorialOfNumber(5); 
