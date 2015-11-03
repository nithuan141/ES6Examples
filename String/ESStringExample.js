// Multiline strings
var multilineString =`In JavaScript this is
 not legal.`
 
console.log(multilineString);
 
// String interpolation
var name = "Bob", time = "today";
console.log(`Hello ${name}, how are you ${time}?`);

var taxPercentage = 10;
var price = 120;

console.log(`The tax is ${price*(taxPercentage/100)}`);

function calculateTotal(str,amt){
var taxPercentage = 10;
return str+(amt+(amt*(taxPercentage/100)));
}
var amt=120;
var msgWithTax= calculateTotal `The total amount is ${amt}`
console.log(msgWithTax);
