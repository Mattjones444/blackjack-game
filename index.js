let firstCard=8;
let secondCard=9;
let sum=firstCard+secondCard;
let hasBlackJack = false;
let isAlive=true;
let message ="";
let messageEl=document.getElementById("message-el");
let sumEl=document.getElementById("sum-el");

function startGame(){
if(sum<21){
    message="Do you want to draw a new card?";
} else if (sum === 21){
    message="Amazing, you've got Blackjack";
    hasBlackJack=true;
} else {
    message="You're out of the game";
    isAlive=false;
}
messageEl.textContent=message;
sumEl.textContent="Sum: "+sum;

}



