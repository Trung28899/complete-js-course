/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/
var scores, roundScore, activePlayer, dice, gamePlaying;

init(); 

dice = Math.floor(Math.random() * 6) + 1;

// Button listener
// 1st: type of event , 2nd: function executed
document.querySelector(".btn-roll").addEventListener('click', btn); 

function btn(){
    // when there is a winner > gamePlaying = false > unable to 
    // continue to roll the dice
    // > hit new game, gamePlaying assigned to true > start new game
    if(gamePlaying){
            // 1. Random number
        dice = Math.floor(Math.random() * 6) + 1; 

        // 2. Display the result
        var diceDOM = document.querySelector(".dice");
        diceDOM.style.display = "block"; 
        diceDOM.src = 'dice-' + dice + '.png'; 

        // 3. Update the round score IF the rolled number was not a 1
        if(dice > 1){
            // Add Score
            roundScore += dice; 
            document.querySelector("#current-" + activePlayer).textContent = roundScore;

        } else {
            nextPlayer(); 
        }
    }
 }

// Event listner for button hold
// When hit hold, add up the current score to the global score
// clear up current score and switch turn to the other player
document.querySelector('.btn-hold').addEventListener('click', function(){
    
    if(gamePlaying){
        // Add Current Score to Global score
        scores[activePlayer] += roundScore; 

        // Update the UI
        document.querySelector('#score-' +  activePlayer).textContent = scores[activePlayer];

        // Check if player won the game
        if(scores[activePlayer] >= 100){
            document.querySelector('#name-' + activePlayer).textContent = "Winner !"; 
            document.querySelector('.dice').style.display = 'none';
            document.querySelector('.player-' + activePlayer + '-panel').classList.add('winner'); 
            document.querySelector('.player-' + activePlayer + '-panel').classList.remove('active'); 
            gamePlaying = false; 
        } else {
            nextPlayer(); 

        }
    }
}); 

function nextPlayer(){
    // Next Player
        // If dice === 1 or hold button is clicked 
        // > Next player turn, current score set to 0
        activePlayer === 0 ? activePlayer = 1 : activePlayer = 0; 
        roundScore = 0; 

        // current score set to 0
        document.getElementById('current-0').textContent = '0'; 
        document.getElementById('current-1').textContent = '0';
        
        // toggle class active to indicate who's turn is it now (the red dot)
        document.querySelector('.player-0-panel').classList.toggle('active'); 
        document.querySelector('.player-1-panel').classList.toggle('active'); 

        // Hide the dice when the turn is switched
        //document.querySelector('.dice').style.display = 'none';
}

document.querySelector('.btn-new').addEventListener('click', init);

function init(){
    scores = [0,0]; 
    activePlayer = 0; 
    roundScore = 0;
    gamePlaying = true; 

    document.querySelector(".dice").style.display = "none";

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



/*
TESTING CODE: 

// Select 1st thing it finds
document.querySelector("#current-" + activePlayer).textContent = dice;
// cant do this with textContent, wont take html tags
//document.querySelector("#current-" + activePlayer).innerHTML ="<em>" + dice + "</em>";

// getting the value with textContent
//var x = document.querySelector("#score-0").textContent;
//console.log(x);



*/