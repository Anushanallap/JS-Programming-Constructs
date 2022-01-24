// Find the Magic Number

// a. Ask the user to think of a number n between 1 to 100
// b. Then check with the user if the number is less then n/2 or greater
// c. Repeat till the Magic Number is reached..



const prompt = require("prompt-sync")();
console.log("Think number  between 1 and 100");

let LeftNumber = 0;
let RighttNumber = 100;

while ((RighttNumber - LeftNumber) > 0) {

    let mid = ((LeftNumber + RighttNumber) / 2);

    let ch = prompt("Is" + mid + "your number? \n(yes or no)")

    if (ch==="yes") {
        console.log("Your number is : " + mid);
        break;
    } else {
        let ch2 = prompt("Is your number between " + LeftNumber + " and " + RighttNumber + " ?\n(yes or no)");
        if (ch2==="yes") {
            RighttNumber = mid;
            //			leftNumber=0;
        } else {
            LeftNumber = mid;
        }
    }
}