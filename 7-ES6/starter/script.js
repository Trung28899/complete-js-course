/* *********************************************
    1. Variable Declaration with let and const: 
********************************************* 

function driverLicense5(passTest){
    
    if(passTest){
        var name = "Trung"; 
        var age = 21; 
    }

    console.log(name + ' , ' + age + ' years old is now officially qualified to drive a car'); 
}

function driverLicense6(passTest){
 
    if(passTest){
        let name = "Trung"; 
        const age = 21; 
    }

    console.log(name + ' , ' + age + ' years old is now officially qualified to drive a car'); 
}

driverLicense5(true); 
// There will be an error on driverLicense6 
// This is because 'let' and 'const' have block scope
// and 'var' have the function scope 
// driverLicense6(true); 

// Another example of let and var

// ES5: 
console.log("var keyword: "); 
var es5 = 23; 

for(var es5 = 0; es5 < 5; es5++){
    console.log(es5); 
}

console.log(es5); 

// ES6: with let keyword, even though the es6 name is similiar
// , the es6 variable in for loop is different variable than the es6
// variable declared outside
console.log("let keyword: "); 
let es6 = 23; 

for(let es6 = 0; es6 < 5; es6++){
    console.log(es6); 
}

console.log(es6);

END OF PART 1
*/

/* *********************************************
    2. Blocks and IIFE 
********************************************* 
// ES5: IIFE (Imediately Invoked Function Expression)

(function() {
    console.log('this is how we invoke IIFE in ES5'); 
})(); 

// ES6: IIFE (Imediately Invoked Function Expression)
{
    console.log('this is how we invoke IIFE in ES6'); 
}

END OF PART 2
*/

/* *********************************************
    3. String in ES6:  
********************************************* 

let firstName = 'Trung';
let lastName = 'Trinh';  
const yearOfBirth = 1999;

function calcAge(year){
    return 2020 - year; 
}

// a. STRING CONCATENATION ES5: 
console.log('This is ' + firstName + ' ' + lastName + 
'. He was born in ' + yearOfBirth + '. Today he is: ' + calcAge(yearOfBirth)); 

// STRING CONCATENATION ES6:
// NOTE THE BACK TICK, NOT THE SINGLE QUOTE 
console.log(`This is ${firstName} ${lastName}. He was born in ${yearOfBirth}. 
Today he is ${calcAge(yearOfBirth)}`); 

// b. SOME FUNCTIONS FOR STRING IN ES6: 
// NOTE THE BACK TICK
const name = `${firstName} ${lastName}`; 

// Doesn't matter how much letters in these methods
console.log(name.startsWith('Tr')); 
console.log(name.endsWith('nh')); 
console.log(name.includes('run')); 
console.log(name.repeat(5)); 
// Repeating the name 5 times

END OF PART 3
*/

/* *********************************************
    4. Arrow Functions:  
    I. PART I: the basic, understanding
    argument, function processing and return 
    part of the arrow function
********************************************* 

const years = [1963, 1965, 1992, 1999];

// ES5 map function: 
var age5 = years.map(function(el){
    return 2020 - el; 
});
console.log(age5); 

// ES6 
// in the map function: 
// el is the argument
// after the => is the return value
let age6 = years.map(el => 2020-el); 
console.log(age6); 


// another example of arrow function in ES6: 
// More than 1 argument: 
// Notice the back tick for the return string after the =>
let age6arguments = years.map((el, index) => `Index ${index} value is: ${el}`); 
console.log(age6arguments);

// another example:
let age6func = years.map((el, index) => {
    const now = new Date().getFullYear(); 
    let age = now - el;
    return `The age of index ${index} is: ${age}`; 
});
console.log(age6func); 

*/

/* *********************************************
    4. Arrow Functions:  
    II. PART II: the 'this' keyword, 
    differences of this referring between 
    es5 function and arrow function
********************************************* 

// ES 5
var box5 = {
    color: 'green', 
    position: '1', 
    clickme: function(){
        var self = this; 
        document.querySelector('.green').addEventListener('click', function(){
            var str = 'This is box number: ' + this.position + '. it has the color: ' + 
            this.color; 
            alert(str); 
        }); 
    }
}

// this.color and this.position of this function will return undefined
// Because it is referring to the window object
// The clickMe() method is attached to the box5 object, however, 
// the function declared in event listener is attached to the window object
// If replacing 'this' by 'self' variable declared above, it will do the work
box5.clickme(); 

// ES 6: note that: 
// The declaration of box6 using ES6 way of declaring: 'const'
const box6 = {
    color: 'green', 
    position: '1', 
    clickme: function(){
        document.querySelector('.green').addEventListener('click', () => {
            var str = 'This is box number: ' + this.position + '. it has the color: ' + 
            this.color; 
            alert(str); 
        }); 
    }
}

// this.color and this.position of this function will return its value
// this is because the arrow function share the 'this' keyword with its 
// surrounding when the ES5 function doesn't
box6.clickme(); 

// Another scenario of the arrow function: 

var box66 = {
    color: 'green', 
    position: '1', 
    clickme: () => {
        var self = this; 
        document.querySelector('.green').addEventListener('click', () => {
            var str = 'This is box number: ' + this.position + '. it has the color: ' + 
            this.color; 
            alert(str); 
        }); 
    }
}

// this.color and this.position of this function will return undefined
// this is because the arrow function right after the clickme shares the 
// this keyword with its surrounding so the 'this' now is referred to the 
// window object  
box66.clickme(); 

// Another example of arrow function
function Person(name){
    this.name = name; 
}

// ES5: Note that: 
// The this.name is undefined so it'll show nothing
// this is because the same reason as above: referring to global object
Person.prototype.myFriends5 = function(friends){
    var arr = friends.map(function(el){
        return this.name + ' is friend with ' + el; 
    });
    console.log(arr); 
}

var friends = ['Linh', 'Phuong', 'Dat', 'Minh']; 
new Person('Karma').myFriends5(friends); 

// ES6: 
// Here the this.name refer to the Person object so we see the proper return
Person.prototype.myFriends6 = function(friends){
    var arr = friends.map(el => `${this.name} is friend with ${el}`);
    console.log(arr); 
}

new Person('Trung').myFriends6(friends); 

END OF PART 4: ARROW FUNCTION
*/

/* *********************************************
    5. Destructuring: is the opposite of construturing
    a data structure. See video 109 bookmark to understand the
    concept of destructuring

    Self thinking: destructuring is the proccess of assigning
    different parts of a data structure into different variables

    Self thinking: constructuring is the process of forming
    a data structure with different data

    IMPORTANT: application of destructuring is to return multiple
    values of a function
*********************************************

// Destructuring in ES5: 
var john = ['John', 26]; 
var name5 = john[0]; 
var age5 = john[1]; 

// Destructuring in ES6: 
const [name6, age6] = ['John', 26]; 
console.log(name6); 
console.log(age6); 

// Example of object destructuring in ES6: 
const obj = {
    firstName: 'Trung', 
    lastName: 'Trinh'
}; 

const {firstName, lastName} = obj; 
console.log(`His name is: ${firstName} ${lastName}`); 

// Another example of object destructing in ES6: 
const {firstName : a, lastName : b} = obj; 
console.log(`His name: ${a} ${b}`); 

// Application of Destructuring: 
// Returning multiple values of a function
function calcAgeRetirement(year){
    let age = new Date().getFullYear() - year;  
    return [age, 65 - age]; 
}

const [age, retirement] = calcAgeRetirement(1999); 
console.log(`He is: ${age} years old and he will retire in ${retirement} years`); 


END OF PART 5. DESTRUCTURING
*/

/* *********************************************
    6. ARRAY IN ES6: utilities of array in ES6
*********************************************  
const boxes = document.querySelectorAll('.box');

// ES5: NodeList to Array
// The boxes get a data structure of the elements in 
// a NodeList
// The boxesArr5 get a data structure of elements in an array

var boxesArr5 = Array.prototype.slice.call(boxes); 
// console.log(boxesArr5); 
// console.log(boxes);

END OF 1ST COMMENT BLOCK
*/

/*
// This will turn all elements to red
boxesArr5.forEach(function(cur){
    cur.style.background = 'red'; 
});
*/

/* ES6: NodeList to Array
let boxesArr6 = Array.from(boxes)
boxesArr6.forEach(cur => cur.style.background = 'green'); 

END OF 2ND COMMENT BLOCK
*/

// ES5 Looping (this will enable the use of 'continue' and 'break' keywords comparing to forEach or map)
/*
for(var i = 0; i < boxesArr5.length; i++){
    
    if(boxesArr5[i].className === 'box blue'){
        continue; 
    }

    boxesArr5[i].textContent = 'I changed to green dawg'; 
}
*/

/* *********************************************
    NEEDING ANOTHER COMMENT BLOCK HERE !!
    ********************************************* 
// ES6 looping
for(const cur of boxesArr6){
    if(cur.className.includes('blue')){
        continue; 
    }

    cur.textContent = 'Aye yo Changed to green tho'; 
}

// FindIndex utility: 
var ages = [12, 15, 9, 21, 3, 10]; 

// ES5 finding the index and its value
var full = ages.map(function(cur){
    return cur >= 18; 
});

console.log(full.indexOf(true));
console.log(ages[full.indexOf(true)]); 

// ES6 finding the index and its value
console.log('ES6 way of doing it: '); 
console.log(ages.findIndex(cur => cur >= 18));
console.log(ages[ages.findIndex(cur => cur >= 18)]); 

END OF 3RD COMMENT BLOCK
END OF PART 6. ARRAY IN ES6
*/

/* *********************************************
    7. SPREAD OPERATOR: 

    SPREAD OPERATOR TAKES AN ARRAY AND TRANSFORM IT 
    INTO DIFFERENT VALUES

    SPREAD OPERATOR HAS THE SAME NOTATION AS THE 
    REST PARAMETER DOWN BELOW WITH 3 DOTS: '...'

    NOTE THIS: 
    EVEN THOUGH THE NOTATION OF SPREAD AND REST OPERATOR
    ARE SIMILIAR, 
    SPREAD OPERATOR IS USED IN A FUNCTION CALL
    REST OPERATOR IS USED IN A FUNCTION DECLARATION
*********************************************  

// Example of adding 4 values normal way: 
function add4Ages(a, b, c, d){
    return a+b+c+d; 
}

var sum1 = add4Ages(18, 22, 21, 10); 
console.log(sum1); 

// ES5 fast way of doing it: 
var ages = [18, 22, 21, 10]; 
var sum2 = add4Ages.apply(null, ages); 
console.log(sum2); 

// ES6 way of doing it: USING SPREAD OPERATOR: 
// Unable to find the wording for spread operator now 
// Find the wording for it later
const sum3 = add4Ages(...ages); 
console.log(sum3); 

// Another Application of Spread Operator: 
const familyTrinh = ['Dung', 'Yen', 'Ngoc']; 
const familyTran = ['Linh', 'Boo']; 
const bigFamily = [...familyTrinh, 'Bin', ...familyTran]; 
console.log(bigFamily); 

END OF 7. SPREAD OPERATOR
*/

/* *********************************************
    8. REST AND DEFAULT PARAMETERS: 
    PART I: REST PARAMETERS

    REST PARAMETERS TAKES SOME SINGLE VALUES 
    AND TRANSFORM IT INTO AN ARRAY

    REST PARAMETERS HAVE THE SAME NOTATION
    AS THE SPREAD OPERATOR WITH THE 3 DOTS: 
    '...'

    NOTE THIS: 
    EVEN THOUGH THE NOTATION OF SPREAD AND REST OPERATOR
    ARE SIMILIAR, 
    SPREAD OPERATOR IS USED IN A FUNCTION CALL
    REST OPERATOR IS USED IN A FUNCTION DECLARATION
*********************************************  

// ES5 way of forming an array with parameters: 
function isFullAge5(){
    // The 'arguments' variable store all the arguments 
    // passed into the function
    // It is an object, not an array
    // console.log(arguments); 

    // converting arguments object to array
    var argsArr = Array.prototype.slice.call(arguments); 

    //using the array to do something
    argsArr.forEach(function(cur){
        console.log((2020 - cur) >= 18); 
    });
}

// ES6 way of forming an array with parameters: Using Rest parameters: 
function isFullAge6(...years){
    years.forEach(cur => {
        console.log((2020 - cur) >= 18); 
    });
}

// Another example: using array arguments with extra argument
// ES5:

function isFullAge5extra(limit){
    // The 'arguments' variable store all the arguments 
    // passed into the function
    // It is an object, not an array
    // console.log(arguments); 

    // converting arguments object to array
    // slicing off the 1st element
    var argsArr = Array.prototype.slice.call(arguments, 1); 
    // console.log(argsArr); 

    //using the array to do something
    argsArr.forEach(function(cur){
        console.log((2020 - cur) >= limit); 
    });
}

// ES6: 
function isFullAge6extra(limit, ...years){
    years.forEach(cur => {
        console.log((2020 - cur) >= limit); 
    });
}




isFullAge5(1990, 2002, 2005); 
console.log("------------------------"); 
isFullAge6(1990, 2002, 2005); 
console.log("------------------------"); 

isFullAge5extra(18, 1990, 2002, 2005); 
console.log("------------------------"); 
isFullAge6extra(1990, 2002, 2005); 

END OF 8 PART I. REST PARAMETERS
*/

/* *********************************************
    8. REST AND DEFAULT PARAMETERS: 
    PART II: DEFAULT PARAMETERS

    USED IN CONSTRUCTOR FUNCTION
    USED FOR UNPASSED ARGUMENTS IN OBJECT
    DECLARATION USING CONSTRUCTOR
*********************************************  

// ES5: 
function TranPerson(firstName, yearOfBirth, lastName, nationality){

    lastName === undefined ? lastName = 'Tran' : lastName = lastName; 
    nationality === undefined ? nationality = 'VietNam' : nationality = nationality; 

    this.firstName = firstName; 
    this.lastName = lastName; 
    this.yearOfBirth = yearOfBirth; 
    this.nationality = nationality; 
}

// notice that you doesn't have to put in all the arguments
// for this function constructor
var Bin = new TranPerson('Bin', 2002); 
var Quang = new TranPerson('Oanh', 1974, 'Huynh', 'Canada');

// ES6: 
function TrinhPerson(firstName, yearOfBirth, 
    lastName = 'Trinh', nationality = 'Vietnam'){
        this.firstName = firstName; 
        this.lastName = lastName; 
        this.yearOfBirth = yearOfBirth; 
        this.nationality = nationality; 
}

var Trung = new TrinhPerson('Trung', 1999); 
var Linh = new TrinhPerson('Linh', 1998, 'Tran', 'Hanoi'); 

console.log(Bin); 
console.log(Quang); 
console.log('----------------');
console.log(Trung); 
console.log(Linh);

END OF 8 PART II. DEFAULT PARAMETER
*/

/* *********************************************
    9. MAP: 
    MAP IS GOOD BECAUSE: 
    
    - MAP CAN USE ANYTHING AS KEY, OPEN 
    MORE POSSIBILITIES

    - MAP IS IRRITABLE, OBJECT ISN'T

    - MAP IS EASY TO GET THE SIZE OF THE MAP
*********************************************  
const questions = new Map(); 

// set(key, value) takes: 
// key for accessing the value in map
// and the value, both of them can be any data type: 
// boolean, int, string, ect...
questions.set('question', 
'What is the official name of the latest major javascript version ?'); 
questions.set(1, 'ES5'); 
questions.set(2, 'ES6'); 
questions.set(3, 'ES2015'); 
questions.set(4, 'ES7'); 
questions.set('correct', 3); 
questions.set(1, 'ES5'); 
questions.set(1, 'ES5'); 

console.log(questions.get('question')); 
console.log(questions.size); 

// Here is how you delete a key and its value
// questions.delete(4); 

// Checking a key value
questions.has(4) === true ? 
console.log('Answer 4 is here !') : console.log('4 aint here'); 

// Map is irritable, means that it can be looped: 
questions.forEach((value, key) => {
    console.log(`This is ${key} and its value is set to: ${value}`); 
});

    END OF 9. MAP
 */


/* *********************************************
    10. CLASSES AND SUB-CLASSES 
    ES 5 ONLY HAS FUNCTION CONSTRUCTOR, METHODS 
    AND EXTRA FIELDS HAS TO BE ADD VIA PROTOTYPE
    FIELD.

    ES6 CLASSES PROVIDE A BETTER AND EASIER TO 
    USE BLUEPRINT FOR OBJECT USAGE

    ALSO IT IS EASIER FOR INHERITANCE WITH ES6 CLASSES

    NOTE THAT YOU CANT USE HOISTING IN CLASSES
    YOU HAVE TO DECLARE IT FIRST TO USE IT
*********************************************  

// ES 5 INHERITANCE AND FUNCTION CONSTRUCTOR 
var Person5 = function(name, yearOfBirth, job) {
    this.name = name;
    this.yearOfBirth = yearOfBirth; 
    this.job = job; 
}

// Adding method in function constructor in ES5
Person5.prototype.calculateAge = 
function() {
    var age = new Date().getFullYear() - this.yearOfBirth; 
    console.log(age); 
}

var Athlete5 = function(name, yearOfBirth, job, olympicGames, medals)
{
    Person5.call(this, name, yearOfBirth, job); 
    this.olympicGames = olympicGames; 
    this.medals = medals; 
}

// INHERITING THE PROTOTYPE
Athlete5.prototype = Object.create(Person5.prototype);

// ADDING NEW METHOD TO NEW CLASS
Athlete5.prototype.wonMedal = 
function (){
    this.medals++; 
    console.log(this.medals); 
}

var athleteDude = new Athlete5('Nigga', 1999, 'swimmer', 3, 10);
athleteDude.wonMedal(); 
athleteDude.calculateAge(); 
console.log('----------------'); 

// ES6 CLASSES AND INHERITANT
class Person6 {
    // must have this constructor
    constructor (name, yearOfBirth, job){
        this.name = name; 
        this.yearOfBirth = yearOfBirth; 
        this.job = job; 
    }

    calculateAge(){
        var age = new Date().getFullYear() - this.yearOfBirth; 
        console.log(age); 
    }

    // static method is special
    static greeting() {
        console.log('There is only 1 way to use this: Person6.greeting();');
    }
}

class Athlete6 extends Person6{
    constructor(name, yearOfBirth, job, olympicGames, medals) {
        super(name, yearOfBirth, job); 
        this.olympicGames = olympicGames; 
        this.medals = medals; 
    }

    wonMedal(){
        this.medals++; 
        console.log(this.medals); 
    }    
}

const Trung = new Athlete6('Trung', 1999, 'Developer', 2, 8); 
Trung.calculateAge(); 
Trung.wonMedal(); 
Person6.greeting();

END OF 10. CLASSES AND SUB-CLASSES
*/