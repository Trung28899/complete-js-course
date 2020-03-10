/*
	ONLY CODING CHALLENGES ON THIS SCRIPT !!
*/

/*
	CODING CHALLENGE 1
*/

/*
Mark and John are trying to compare their BMI (Body Mass Index), which is calculated using the formula: 
BMI = mass / height^2 = mass / (height * height). (mass in kg and height in meter).

1. Store Mark's and John's mass and height in variables
2. Calculate both their BMIs
3. Create a boolean variable containing information about whether Mark has a higher BMI than John.
4. Print a string to the console containing the variable from step 3. (Something like "Is Mark's BMI higher than John's? true"). 

GOOD LUCK 😀
*/
/*
var MarkHeight = 1.88;
var MarkWeight = 88;

var JohnHeight = 2;
var JohnWeight = 99;

var JohnBMI = JohnWeight / (JohnHeight * JohnHeight);
var MarkBMI = MarkWeight / (MarkHeight * MarkHeight);
var MarkBmiHigher = MarkBMI > JohnBMI;
console.log("MarkBMI higher ? " + MarkBmiHigher);
console.log("Mark BMI is: " + MarkBMI);
console.log("John BMI is: " + JohnBMI);
*/

/*****************************
 * CODING CHALLENGE 2
 */

/*
John and Mike both play basketball in different teams. In the latest 3 games, John's team scored 
89, 120 and 103 points, while Mike's team scored 116, 94 and 123 points.

1. Calculate the average score for each team
2. Decide which teams wins in average (highest average score), and print the winner to the console. 
Also include the average score in the output.
3. Then change the scores to show different winners. 
Don't forget to take into account there might be a draw (the same average score)

4. EXTRA: Mary also plays basketball, and her team scored 97, 134 and 105 points. 
Like before, log the average winner to the console. HINT: you will need the && operator to take the decision. 
If you can't solve this one, just watch the solution, it's no problem :)
5. Like before, change the scores to generate different winners, keeping in mind there might be draws.

GOOD LUCK 😀
*/
/*
var johnAverage = (89 + 120 + 103) / 3;
var mikeAverage = (116 + 94 + 1239) / 3;
var MaryAverage = (97 + 134 + 105) / 3;

if (johnAverage > mikeAverage) {
  if (johnAverage > MaryAverage) {
    console.log("johnAverage is the highest average !!");
  } else if (johnAverage == MaryAverage) {
    console.log("johnAverage and MaryAverage are the highest average !!");
  } else {
    console.log("MaryAverage is the highest Average !!");
  }
} else if (johnAverage == mikeAverage) {
  if (johnAverage > MaryAverage) {
    console.log("johnAverage and mikeAverage are the highest average !!");
  } else if (johnAverage == MaryAverage) {
    console.log("They all have the same average");
  } else {
    console.log("MaryAverage is the highest Average !!");
  }
} else {
  if (mikeAverage > MaryAverage) {
    console.log("mikeAverage is the highest average !!");
  } else if (mikeAverage == MaryAverage) {
    console.log("mikeAverage and MaryAverage are the highest average !!");
  } else {
    console.log("MaryAverage is the highest Average !!");
  }
}

console.log("JohnAverage: " + johnAverage);
console.log("mikeAverage: " + mikeAverage);
console.log("MaryAverage: " + MaryAverage);
*/

/*****************************
 * CODING CHALLENGE 3
 */

/*
John and his family went on a holiday and went to 3 different restaurants. 
The bills were $124, $48 and $268.

To tip the waiter a fair amount, John created a simple tip calculator (as a function). 
He likes to tip 20% of the bill when the bill is less than $50, 15% 
when the bill is between $50 and $200, and 10% if the bill is more than $200.

In the end, John would like to have 2 arrays:
1) Containing all three tips (one for each bill)
2) Containing all three final paid amounts (bill + tip).

(NOTE: To calculate 20% of a value, simply multiply it with 20/100 = 0.2)

GOOD LUCK 😀
*/
/*
function paymentCalc(bill) {
  if (bill < 50) {
    return bill + bill * 0.2;
  } else if (bill > 50 && bill < 200) {
    return bill + bill * 0.15;
  } else if (bill > 200) {
    return bill + bill * 0.1;
  }
}

var bills = [124, 48, 268];
var payment = [
  paymentCalc(bills[0]),
  paymentCalc(bills[1]),
  paymentCalc(bills[2])
];
console.log(payment);
*/

/*****************************
 * CODING CHALLENGE 4
 */

/*
Let's remember the first coding challenge where Mark and John compared their BMIs. 
Let's now implement the same functionality with objects and methods.
1. For each of them, create an object with properties for their full name, mass, and height
2. Then, add a method to each object to calculate the BMI. 
Save the BMI to the object and also return it from the method.
3. In the end, log to the console who has the highest BMI, 
together with the full name and the respective BMI. Don't forget they might have the same BMI.

Remember: BMI = mass / height^2 = mass / (height * height). (mass in kg and height in meter).

GOOD LUCK 😀
*/
/*
var Mark = {
  fullName: "Mark Ibrahim",
  mass: 80,
  height: 1.88,
  calcBMI: function() {
    this.BMI = this.mass / (this.height * this.height);
    return this.BMI;
  }
};

var John = {
  fullName: "John Doe",
  mass: 99,
  height: 2,
  calcBMI: function() {
    this.BMI = this.mass / (this.height * this.height);
    return this.BMI;
  }
};

if (Mark.calcBMI() > John.calcBMI()) {
  console.log(Mark.fullName + " has a higher BMI");
  console.log("Mark BMI: " + Mark.calcBMI());
} else if (Mark.calcBMI() == John.calcBMI()) {
  console.log("They have equal BMI");
  console.log("Their BMI: " + John.calcBMI());
} else {
  console.log("John has higher BMI");
  console.log("John BMI: " + John.calcBMI());
}
*/

/*****************************
 * CODING CHALLENGE 5
 */

/*
Remember the tip calculator challenge? Let's create a more advanced version using everything we learned!

This time, John and his family went to 5 different restaurants. 
The bills were $124, $48, $268, $180 and $42.
John likes to tip 20% of the bill when the bill is 
less than $50, 15% when the bill is between $50 and $200, and 10% if the bill is more than $200.

Implement a tip calculator using objects and loops:
1. Create an object with an array for the bill values
2. Add a method to calculate the tip
3. This method should include a loop to iterate over all the paid bills and do the tip calculations
4. As an output, create 1) a new array containing all tips, and 2) an array containing final paid amounts (bill + tip). 
HINT: Start with two empty arrays [] as properties and then fill them up in the loop.


EXTRA AFTER FINISHING: Mark's family also went on a holiday, going to 4 different restaurants. 
The bills were $77, $375, $110, and $45.
Mark likes to tip 20% of the bill when the bill is less than $100, 
10% when the bill is between $100 and $300, 
and 25% if the bill is more than $300 (different than John).

5. Implement the same functionality as before, this time using Mark's tipping rules
6. Create a function (not a method) to calculate the average of a given array of tips. 
HINT: Loop over the array, and in each iteration store the current sum in a variable (starting from 0). 
After you have the sum of the array, divide it by the number of elements in it (that's how you calculate the average)
7. Calculate the average tip for each family
8. Log to the console which family paid the highest tips on average

GOOD LUCK 😀
*/
/*
var John = {
  fullName: "John Doe",
  bills: [124, 48, 268, 180, 42],
  calcTips: function() {
    this.finalAmounts = [];
    this.tips = [];

    for (var i = 0; i < this.bills.length; i++) {
      var bill = this.bills[i];

      if (bill < 50) {
        this.tips[i] = 0.2 * bill;
        this.finalAmounts[i] = this.tips[i] + bill;
      } else if (bill > 50 && bill < 200) {
        this.tips[i] = 0.15 * bill;
        this.finalAmounts[i] = this.tips[i] + bill;
      } else if (bill > 200) {
        this.tips[i] = 0.1 * bill;
        this.finalAmounts[i] = this.tips[i] + bill;
      }
    }
  }
};

var Mark = {
  fullName: "Mark Doe",
  bills: [77, 375, 110, 45],
  calcTips: function() {
    this.finalAmounts = [];
    this.tips = [];

    for (var i = 0; i < this.bills.length; i++) {
      var bill = this.bills[i];

      if (bill < 100) {
        this.tips[i] = 0.2 * bill;
        this.finalAmounts[i] = this.tips[i] + bill;
      } else if (bill > 100 && bill < 300) {
        this.tips[i] = 0.1 * bill;
        this.finalAmounts[i] = this.tips[i] + bill;
      } else if (bill > 300) {
        this.tips[i] = 0.25 * bill;
        this.finalAmounts[i] = this.tips[i] + bill;
      }
    }
  }
};

function calcAverage(tips) {
  var averageTips;
  var totalTips = 0;

  for (var i = 0; i < tips.length; i++) {
    totalTips += tips[i];
  }

  averageTips = totalTips / tips.length;
  return averageTips;
}

John.calcTips();
Mark.calcTips();
console.log(John);
console.log(Mark);
console.log(calcAverage(Mark.tips));
console.log(calcAverage(John.tips));
var MarkTipsHigher = calcAverage(Mark.tips) > calcAverage(John.tips);
console.log("MarkTips is Higher ? " + MarkTipsHigher);
*/
