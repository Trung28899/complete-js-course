1-Object in javascript: 
- Almost everything is object in javascript
- Except for primitives: numbers, strings, boolean, undefined and null, 
everything else is object in javascript

2-Inheritant and advanced OOP in javascript: 
- Every javascript object has a prototype property, which makes Inheritant
possible in javascript. 

- The prototype prototype is where we put methods and 
properties that we want other objects to Inherit

- Constructor's prototype property is not the prototype of the Constructor itself, 
it's the prototype of All instances that are created through it 

- When a certain method or property is called, the search start in the object itself, 
and if it cannot be found, the search moves on to the object's prototype. This continues
until the method is found: this is called "prototype chain"

3. Seeing the prototype in object: 
- in console, type: Person > will show the Person
object with properties and the prototype properties: 
'__proto__'. Or you can type: Person.prototype, hit enter

- In here, we can see all the inherited functions and 
properties and functions available for the object
Example: in console, type: 
john.hasOwnProperty('job') > hit enter

- Another way for Inheritant: Object.create method

4. Compare between primitives and object: 
- primitives variable hold the data inside the variable itself
- object variable hold the address reference that point to the data

FUNCTION: 
- When we pass primitives variable into a function, 
it create a copy of primitive data and work with it in
function scope

- When we pass object variable into a function, we
are passing the reference of the data so the data
can be changed

5. Function: 
- Anynomous function is the function without a name
- Function is an instance of the Object type
- Function in JS can take a function as an argument
and can return a function
> this shows that function is just like an object in JS

- Application of function returning function: 
you can create one generic function and create 
a bunch of more funcitons based on that generic function

6. Immediately Involked Function Expressions (IIFE): 
- This is the function that is not reusable, only used
once in the whole program
- The purpose of this kind of function is for data privacy: 
creating a private scope that would not interact with the
outside code
- Here is an example: 
(function (goodLuck){
    var score = Math.random() *10; 
    console.log(score >= 5 - goodLuck); 
})(5); 

7. Closure: 
- An inner function has always access to the variable and
parameters of its outer function, even after the outer 
function has returned
- This is possible because of scope chain
- Understand scope chain and execution stack well 
for this concept

8. Method borrowing: call, apply and bind
- See code example