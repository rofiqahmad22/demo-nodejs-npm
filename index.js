console.log("sqrt and pow result using mathjs package");

// sqrt
const { sqrt } = require("mathjs");
console.log(`sqrt result: ${sqrt(9).toString()}`);

// pow
const { pow } = require("mathjs");
console.log(`pow result: ${pow(2, 2).toString()}`);
