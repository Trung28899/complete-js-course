/////////////////////////////
// CODING CHALLENGE

/*
--- Let's build a fun quiz game in the console! ---

1. Build a function constructor called Question to 
describe a question. A question should include:
a) question itself
b) the answers from which the player can choose 
the correct one (choose an adequate data 
structure here, array, object, etc.)
c) correct answer (I would use a number for this)

2. Create a couple of questions using the constructor

3. Store them all inside an array

4. Select one random question and log it on 
the console, together with the 
possible answers 
(each question should have a number) 
(Hint: write a method for the Question 
    objects for this task).

5. Use the 'prompt' function to ask the 
user for the correct answer. 
 user should input the number of the correct 
 answer such as you displayed it on Task 4.

6. Check if the answer is correct and 
print to the console whether the answer 
is correct ot nor (Hint: write another method for this).

7. Suppose this code would be a plugin 
for other programmers to use in their code. 
So make sure that all your code is private and 
doesn't interfere with the other programmers code 
(Hint: we learned a special technique to do exactly that).
*/

// Task 1 + 4
var Question = function(question, possibleAnswer, correctAnswer) {
  this.question = question;
  this.possibleAnswer = possibleAnswer;
  this.correctAnswer = correctAnswer;
  this.outputQuestionAnswer = function() {
    var outputString =
      "Question: \n" + this.question + "\nChoose your answer: \n";

    for (var i = 0; i < possibleAnswer.length; i++) {
      outputString += i + ": " + possibleAnswer[i] + "\n";
    }

    console.log(outputString);
  };
};
// End task 1 + 4

// task 2
var quest1 = new Question(
  "The sun rise in which side ?",
  ["West", "East", "North", "South"],
  "East"
);

var quest2 = new Question(
  "What's my name",
  ["Trung", "Linh", "Dat", "Trang", "Phuong"],
  "Trung"
);

var quest3 = new Question(
  "What's my nationality ?",
  ["Vietnamese", "Canada", "Laos", "China"],
  "Vietnamese"
);

var quest4 = new Question(
  "What's continent Im living in",
  ["Europe", "America", "Africa", "Oceanic", "Asia"],
  "America"
);
// End task 2

// task 3 + 4
var questArray = [quest1, quest2, quest3, quest4];

// Task 7:
/*
(function(questionArray) {
  var targetedObject = questArray[Math.floor(Math.random() * 4)];
  targetedObject.outputQuestionAnswer();
  // End task 3 + 4

  // Task 5 + 6:
  var promptInput = prompt("Please enter the correct Answer: ");

  console.log(
    "Answer is: " +
      (targetedObject.correctAnswer ===
        targetedObject.possibleAnswer[promptInput])
  );
})(questArray); */

/*
--- Expert level ---

8. After you display the result, 
display the next random question, 
so that the game never ends 
(Hint: write a function for this and 
call it right after displaying the result)

9. Be careful: after Task 8, the game 
literally never ends. 
So include the option to quit the game 
if the user writes 'exit' instead of the answer. 
In this case, DON'T call the function from task 8.

10. Track the user's score to make the 
game more fun! So each time an answer is correct, 
add 1 point to the score 
(Hint: I'm going to use the power of closures 
for this, but you don't have to, 
just do this with the tools you feel more comfortable 
at this point).

11. Display the score in the console. 
Use yet another method for this.
*/

// Task 8 + 9
var score = 0;
function askQuestions(questionArray) {
  var targetedObject = questArray[Math.floor(Math.random() * 4)];
  targetedObject.outputQuestionAnswer();
  targetedObject.logScore = function() {
    console.log("Score is: " + score);
  };

  var promptInput = prompt(
    "Please enter the correct Answer (enter 'exit' to finish): "
  );

  if (promptInput === "exit") {
    console.log("The game ends");
  } else {
    var bool =
      targetedObject.correctAnswer ===
      targetedObject.possibleAnswer[promptInput];
    console.log("Answer is: " + bool);
    if (bool) {
      score++;
    }
    targetedObject.logScore();
    askQuestions(questArray);
  }
}

askQuestions(questArray);
