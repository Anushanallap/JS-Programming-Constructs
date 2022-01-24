

//Write a program that takes a input and determines if the number is a prime.


function checkForPrimeNumber(Array) {
    let arry = Array;
    for (let index of arry) {

        if (index % 2 === 0) {
            console.log(index + " is not prime number");
        } else {
            console.log(index + " is prime number");
        }
    }
}

// check for Prime number 
checkForPrimeNumber(new Array(3, 5, 11, 13, 17, 19, 29, 31, 41));
// check fot Not prime number 
checkForPrimeNumber(new Array(1, 4, 8, 9, 12, 14, 15, 20, 21));