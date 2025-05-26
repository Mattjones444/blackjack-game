let cards=[];
let sum=0;
let hasBlackJack = false;
let isAlive=false;
let message ="";
let messageEl=document.getElementById("message-el");
let sumEl=document.querySelector("#sum-el");
let cardsEl=document.querySelector(".cards-el");
let player={
    Name:"Matt",
    Chips:145

}

let playerEl=document.getElementById("player-el");
playerEl.textContent=player.Name + ": £ "+" "+player.Chips;

function getRandomCard(){
    let randomCard=Math.floor(Math.random()*13)+1;
    if(randomCard===1){
        return 11;
    } else if(randomCard>10){
        return 10;
    }else {
        return randomCard;
    }
    
}

function startGame(){

    isAlive=true;
    let firstCard=getRandomCard();
    let secondCard=getRandomCard();
    cards=[firstCard,secondCard];
    sum=firstCard+secondCard;
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

cardsEl.textContent="Cards: "
for(let i=0;i<cards.length;i++){
    cardsEl.textContent +=cards[i] + " ";
}
}

function newCard(){

    if(isAlive===true&&hasBlackJack===false){
    let card=getRandomCard();
    sum+=card;
    cards.push(card);
    renderGame();
    }

}









