// //Help user find degF or degC based on their Conversion Selection. Use
// Case Statement and ensure that the inputs are within the Freezing Point 


function TempConversion() {

    const prompt = require("prompt-sync")();
    const choice = prompt( 1. converting from Fahrenheit to Celsius 2. converting Celsius to Fahrenheit");
    let fahrenhitemp = 0.0;
    let celsiustemp = 0.0;

    switch (choice) {
        case "1":
            ft = prompt("Enter temp in Fahrenheit: ");
            celsiustemp = 5 / 9.0 * (fahrenhitemp - 32);
            console.log("Tempe in Celsius: " + celsiustemp);
            break;

        case "2":
            celsiustemp = prompt("Enter temp in Celsius:");
            fahrenhitemp = 1.8 * ct + 32;
            console.log("Temp in Fahrenheit: " + fahrenhitemp);
            break;

        default:
            console.log("Incorrect Choice");
            break;
    }
}


TempConversion();
