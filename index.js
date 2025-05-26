let firstCard=8;
let secondCard=9;
let cards=[firstCard,secondCard];
let sum=firstCard+secondCard;
let hasBlackJack = false;
let isAlive=true;
let message ="";
let messageEl=document.getElementById("message-el");
let sumEl=document.querySelector("#sum-el");
let cardsEl=document.querySelector(".cards-el");


function startGame(){
    renderGame();
}

function renderGame(){
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
cardsEl.textContent="Cards: "+cards[0] + " " + cards[1];
}

function newCard(){
    let card=1;
    sum+=card;
    renderGame();

}








