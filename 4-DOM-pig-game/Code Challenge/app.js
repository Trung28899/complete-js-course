/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/
  
/*
YOUR 3 CHALLENGES
Change the game to follow these rules:

1. A player looses his ENTIRE score when he rolls two 6 in a row. 
After that, it's the next player's turn. 
(Hint: Always save the previous dice roll in a separate variable)

2. Add an input field to the HTML where players can set the winning score, 
so that they can change the predefined score of 100. 
(Hint: you can read that value with the .
value property in JavaScript. This is a good oportunity 
to use google to figure this out :)

3. Add another dice to the game, so that there are two dices now. 
The player looses his current score when one of them is a 1. 
(Hint: you will need CSS to position the second dice, 
so take a look at the CSS code for the first one.)
*/

var scores, roundScore, activePlayer, dice1, gamePlaying, previousRoll;
var limitScore, diceDOM, dice2; 
diceDOM = document.querySelectorAll(".dice");
init(); 

// Button listener
// 1st: type of event , 2nd: function executed
document.querySelector(".btn-roll").addEventListener('click', btn);
document.querySelector('.btn-new').addEventListener('click', init); 
// Event listner for button hold
// When hit hold, add up the current score to the global score
// clear up current score and switch turn to the other player
document.querySelector('.btn-hold').addEventListener('click', function(){
    
    // 2nd Code Challenge
    var finalScore = document.querySelector('.final-score').value;
    finalScore === '' ? limitScore = 100 : limitScore = finalScore; 
     
    if(gamePlaying){
        // Add Current Score to Global score
        scores[activePlayer] += roundScore; 

        // Update the UI
        document.querySelector('#score-' +  activePlayer).textContent = scores[activePlayer];

        // Check if player won the game
        if(scores[activePlayer] >= limitScore){
            document.querySelector('#name-' + activePlayer).textContent = "Winner !"; 
            diceDOM[0].style.display = 'none'; 
            diceDOM[1].style.display = 'none'; 
            document.querySelector('.player-' + activePlayer + '-panel').classList.add('winner'); 
            document.querySelector('.player-' + activePlayer + '-panel').classList.remove('active'); 
            gamePlaying = false; 
        } else {
            nextPlayer(); 
        }
    }
}); 

function btn(){
    // when there is a winner > gamePlaying = false > unable to 
    // continue to roll the dice
    // > hit new game, gamePlaying assigned to true > start new game
    if(gamePlaying){
            // 1. Random number
        dice1 = Math.floor(Math.random()*6)+1; 
        dice2 = Math.floor(Math.random()*6)+1; 

        // 2. Display the result
        diceDOM[0].style.display = "block"; 
        diceDOM[1].style.display = "block"; 
        diceDOM[0].src = 'dice-' + dice1 + '.png'; 
        diceDOM[1].src = 'dice-' + dice2 + '.png'; 

        // 3. Update the round score IF the rolled number was not a 1
        if((dice1 > 1) && (dice2 > 1)){
            addScore(); 
        } else {
            nextPlayer(); 
        }

        /*
            CODING CHALLENGE 1: 
        if((dice > 1) && (dice !== 6)){
            addScore(); 
        } else if(dice === 6){ 
            if(previousRoll === 6){
                scores[activePlayer] = 0; 
                document.querySelector('#score-'+activePlayer).textContent = scores[activePlayer]; 
                nextPlayer();  
            } else {
                addScore(); 
            }
        } else {
            nextPlayer(); 
        }

        */
    }
 }

function nextPlayer(){
    // Next Player
        // If dice === 1 or hold button is clicked 
        // > Next player turn, current score set to 0
        activePlayer === 0 ? activePlayer = 1 : activePlayer = 0; 
        roundScore = 0; 
        previousRoll = 0;

        // current score set to 0
        document.getElementById('current-0').textContent = '0'; 
        document.getElementById('current-1').textContent = '0';
        
        // toggle class active to indicate who's turn is it now (the red dot)
        document.querySelector('.player-0-panel').classList.toggle('active'); 
        document.querySelector('.player-1-panel').classList.toggle('active'); 

        // Hide the dice when the turn is switched
        //document.querySelector('.dice').style.display = 'none';
}

function init(){
    scores = [0,0]; 
    activePlayer = 0; 
    roundScore = 0;
    gamePlaying = true; 

    diceDOM[0].style.display = 'none'; 
    diceDOM[1].style.display = 'none'; 
    

    document.getElementById('score-0').textContent = '0'; 
    document.getElementById('score-1').textContent = '0'; 
    document.getElementById('current-0').textContent = '0'; 
    document.getElementById('current-1').textContent = '0';
    
    document.querySelector('#name-0').textContent = "Player 1"; 
    document.querySelector('#name-1').textContent = "Player 2"; 

    document.querySelector('.player-0-panel').classList.remove('winner'); 
    document.querySelector('.player-1-panel').classList.remove('winner'); 
    document.querySelector('.player-0-panel').classList.remove('active'); 
    document.querySelector('.player-1-panel').classList.remove('active');
    
    // we do this bc we dont want to have 2 active classes in the same object
    document.querySelector('.player-0-panel').classList.add('active'); 
}

function addScore(){
    // Add Score
    previousRoll = dice1; 
    roundScore += dice1 + dice2; 
    document.querySelector("#current-" + activePlayer).textContent = roundScore;
}