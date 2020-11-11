
let startButton = document.getElementById("start")

function random() {
    return Math.floor(Math.random()*6)+1;
}
console.log(random())

let dice1 = document.getElementById("dice_A")
let dice2 = document.getElementById("dice_B")
let player1= document.getElementById("player_1")
let player2= document.getElementById("player_2")

startButton.onclick = () =>{
   var randomNum1 =random();
    var randomNum2 = random();
dice1.src = "images/dice" + randomNum1 + ".png";
dice2.src = "images/dice" + randomNum2 + ".png";
if(randomNum1>randomNum2){
    document.querySelector("h1").innerHTML="Player1 wins";
    document.querySelector('#player_1').style.color = 'red';
    document.querySelector('#player_1').style.fontWeight = 'bold';
    document.querySelector('#player_2').style.color = '';

}else if(randomNum1<randomNum2){
    document.querySelector("h1").innerHTML="Player2 wins";
    document.querySelector('#player_2').style.color = 'red';
    document.querySelector('#player_2').style.fontWeight = 'bold';
    document.querySelector('#player_1').style.color = '';

}else{
    document.querySelector("h1").innerHTML="Draw"
}
}
