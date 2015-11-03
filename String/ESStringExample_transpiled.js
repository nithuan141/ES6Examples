// Multiline strings
"use strict";

var _templateObject = _taggedTemplateLiteral(["The total amount is ", ""], ["The total amount is ", ""]);

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var multilineString = "In JavaScript this is\n not legal.";

console.log(multilineString);

// String interpolation
var name = "Bob",
    time = "today";
console.log("Hello " + name + ", how are you " + time + "?");

var taxPercentage = 10;
var price = 120;

console.log("The tax is " + price * (taxPercentage / 100));

function calculateTotal(str, amt) {
  var taxPercentage = 10;
  return str + (amt + amt * (taxPercentage / 100));
}
var amt = 120;
var msgWithTax = calculateTotal(_templateObject, amt);
console.log(msgWithTax);
