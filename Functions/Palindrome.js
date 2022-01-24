// Take a number from user and check if the number is a Prime then show

// that its palindrome is also prime
// a. Write function check if number is Prime
// b. Write function to get the Palindrome.
// c. Check if the Palindrome number is also prime





function checkPalindrome(number) {

    const prompt = require("prompt-sync")();
    let rev = "";
    let original = number;

    let length = original.length;

    for (i = length - 1; i >= 0; i--) {
        rev = rev + original.charAt(i);
    }
    if (original === rev) {
        console.log("Given number is a palindrome.");
    }
    else {
        console.log("Given number is not a palindrome.");
    }
}

checkPalindrome("181");