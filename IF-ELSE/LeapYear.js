// Write a program that takes a year as input and outputs the Year is a Leap Year or not
// a Leap Year. A Leap Year checks for 4 Digit Number, Divisible by 4 and not 100 unless
// divisible by 400.



function checkLeapYear(Array) {

    for (let index of Array) {

        if ((0 == index % 4) && (0 != index % 100) || (0 == index % 400)) {
            console.log(index + " is leap year");
        } else {
            console.log(index + " is not leap year");
        }
    }
}

checkLeapYear(new Array( 2000,2004,2008,2012,2014));
