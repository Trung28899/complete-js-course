SPECIAL THINGS TO REMEMBER FROM THIS MODULE:
- script.js: is linked to index.html, contains coding challenges
- finalscript.js is not linked to index.html, contains the basic code of JS

1. Ternary Operator: 
Example: 

var firstName = "John";
var age = 14;

// Ternary operator
// if age >= 18 is true-> drink beer
// if age >=18 is wrong -> dring juice

age >= 18
  ? console.log(firstName + " drinks beer.")
  : console.log(firstName + " drinks juice.");

// Ternary operator
  var drink = age >= 18 ? 'beer' : 'juice';
  console.log(drink);

2. == and ===:
- == do type coersion. Means that 23 == '23' is true,
it converts string number to number
- === doesn't do type coersion. Means that 23 === '23' 
is false 

3. typeof: 
var john = 'Hello World'
console.log(typeof john); 
// output will be string

4. Object and Method: 
- See code Challenge 5
- Pay attention to how array is declared in the method
and used by the object