'use strict';

let secretNumber= Math.trunc(Math.random()*20)+1;
let score=10;
let highscore=0;

const displayMessage= function(message){
    document.querySelector('.message').textContent = message;
}

document.querySelector('.check').addEventListener('click',function () {
    const guess=Number(document.querySelector('.guess').value);
    

if (!guess) {
   displayMessage('⛔ No Number!');

} else if (guess === secretNumber) { //compiler checks from top to bottom so i arranged it that way specially to fix bugs. 
   displayMessage( '🎉 Correct Number!,You WON');
    document.querySelector('.number').textContent= secretNumber;

    document.querySelector('body').style.backgroundColor='#60b347';
    document.querySelector('.number').style.width = '30rem';
    //displaying highscore
    if (score>highscore) {
        highscore=score;
        document.querySelector('.highscore').textContent=highscore;
    }

} else if (Math.abs(guess - secretNumber) <= 3) {
    if (score>1) {
        displayMessage('🔍 Too Close!');
        score--;
        document.querySelector('.score').textContent=score;
    } else {
        displayMessage( '😭 You Lost the game,Try Again!');
        document.querySelector('.score').textContent=0;
        
    }
    
} else if (guess != secretNumber) {
    if (score>1) {
        displayMessage(
        guess > secretNumber ? '📈 Too High!':'📉 Too Low!') ;
        score--;
        document.querySelector('.score').textContent=score;
    } else {
        displayMessage ('😭 You Lost the game,Try Again!');
        document.querySelector('.score').textContent=0;
        
    }

});

document.querySelector('.again').addEventListener('click',function(){
    
    secretNumber= Math.trunc(Math.random()*20)+1;
    score=10;
    displayMessage('Start guessing...');
    document.querySelector('.score').textContent=score;
    document.querySelector('.number').textContent='?';
    document.querySelector('.guess').value='';
    document.querySelector('body').style.backgroundColor='#222';
    document.querySelector('.number').style.width = '15rem';
    
})
