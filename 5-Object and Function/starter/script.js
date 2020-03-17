//1, Function constructor:
// this referred to the new object created
/*
var Person = function(name, yearOfBirth, job) {
  this.name = name;
  this.yearOfBirth = yearOfBirth;
  this.job = job;
};
*/

/*
//2, INHERITANT of the Person object
// See README.txt for inheritant note to read
// about the prototype property
Person.prototype.calculateAge = function() {
  console.log(2020 - this.yearOfBirth);
};
Person.prototype.lastName = "Trinh";

// with new > brand new object is created, constructor function
// is called
var john = new Person("John", 1990, "teacher");
var jane = new Person("Jane", 1969, "designer");
var mark = new Person("Mark", 1948, "retired");

john.calculateAge();
jane.calculateAge();
mark.calculateAge();

console.log(john.lastName + " " + jane.lastName + " " + mark.lastName);
*/

//3. Object.create method
// personProto is declared as an object
/*
var personProto = {
  calculateAge: function() {
    console.log(2016 - this.yearOfBirth);
  }
};

// 1st way to use Object.create
var john = Object.create(personProto);
// declaring and assigning properties for object john
// that inherited the object personProto
john.name = "John";
john.yearOfBirth = 1990;
john.job = "teacher";
// Then type john in console > enter

// 2nd way to inherit using Object.create
var jane = Object.create(personProto, {
  name: { value: "Jane" },
  yearOfBirth: { value: 1969 },
  job: { value: "designer" }
});
// Then type john in console > enter > jane > enter
*/

// 4. Primitives and Object in Javascript
// Primitives variable hold the data inside the variable itself
/*
var a = 23;
var b = a;
a = 46;
console.log(a);
console.log(b);

// Object variable hold the data inside the variable itself
var obj1 = {
  name: "John",
  age: "26"
};
var obj2 = obj1;
obj1.age = 30;
console.log(obj1.age);
// got changed to 30
console.log(obj2.age);

// Functions:
var age = 20;
var obj = {
  name: "Trung",
  city: "Toronto"
};

function change(a, b) {
  a = 30;
  obj.city = "San Francisco";
}

change(age, obj);
// For reasoning, see README part 4, under FUNCTION
console.log(age + " " + obj.city);
*/

// 5. Function:
// a. Passing functions as arguments
/*
var years = [1990, 1965, 1937, 2005, 1998];

// Passing array and functions as arguments
function arrayCalc(arr, fn) {
  var arrRes = [];
  for (var i = 0; i < arr.length; i++) {
    arrRes.push(fn(arr[i]));
  }
  return arrRes;
}

function calculateAge(el) {
  return 2016 - el;
}
// Passing array and functions as arguments
// To show that function is just an object
var ages = arrayCalc(years, calculateAge);
console.log(ages);
*/

// b. Function returns a function:
/*
function interviewQuestion(job) {
  if (job === "designer") {
    return function(name) {
      console.log(name + " can you please explain what UX design is ?");
    };
  } else if (job === "teacher") {
    return function(name) {
      console.log("What subject do you teach , " + name + "?");
    };
  } else {
    return function(name) {
      console.log("Hello " + name + ", What do you do ?");
    };
  }
}

var teacherQuestion = interviewQuestion("teacher");
teacherQuestion("John");
var designerQuestion = interviewQuestion("designer");
designerQuestion("Trung");
designerQuestion("John");
// Application of function returning function:
// you can create one generic function and
// Create a bunch of more funcitons based on that
// generic function

// MUCH EASIER WAY TO DO IT:
interviewQuestion("teacher")("Mark");
*/

// 6. Immediately Invoked Function Expression:
/*
(function(goodLuck) {
  var score = Math.random() * 10;
  console.log(score >= 7 - goodLuck);
})(5);
*/
