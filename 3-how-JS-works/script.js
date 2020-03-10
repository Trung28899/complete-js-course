/////////////////////////////////////
// Lecture: Hoisting
/*
calculateAge(1965);

function calculateAge(year) {
  console.log(2016 - year);
}

// Hoisting this function
retirement(1956);
// This is function expression
var retirement = function(year) {
  console.log(65 - (2016 - year));
};
*/

/////////////////////////////////////
// Lecture: The this keyword

/*
calculateAge(1985);

function calculateAge(year) {
  console.log(2016 - year);
  // 'this' refer to the Window object
  // which is the global object
  console.log(this);
}
 
*/

var john = {
  name: "John",
  yearOfBirth: 1998,
  calculateAge: function() {
    // The 'this' keyword now refers
    // to john object
    console.log(2016 - this.yearOfBirth);

    // this function is only avail in
    // the scope of calculateAge Function
    function innerFunction() {
      // This will show the Window object
      // this is because it is in a function
      // that's just a rule, remember it
      console.log(this);
    }
    innerFunction();
  }
};

var mike = {
  name: "Mike",
  yearOfBirth: 1984
};

john.calculateAge();
// this is Method Borrowing
mike.calculateAge = john.calculateAge;
mike.calculateAge();
