
const compChoice =["r","p","s"];
var promptAns= prompt("Do you want to play Rock, paper, Scissors. Type Y for yes Type N for No");

while(promptAns=="Y"){
    rpsGame();
    promptAns=prompt("Do you want to play Rock, paper, Scissors. Type Y for yes Type N for No");

}


console.log("You have chosen to stop playing");



function compPlay(compChoice){
    return compChoice[Math.floor(Math.random()*compChoice.length)]
}

function rpsGame(){
  var playerChoice= prompt("Type r for rock, p for paper, s for scissors");
  console.log(playerChoice);  
  var compPlays=compPlay(compChoice);
  
  switch(playerChoice){
    case "r":
        if(compPlays=="p"){
            console.log("Computuer chose Paper You Lose");

        }
        else if(compPlays=="r"){
            console.log("Computuer chose Rock You Tie");
        }
        else{
            console.log("Computuer chose Scissors You Win");
        }

    break;
    case "p":
        if(compPlays=="p"){
            console.log("Computuer chose Paper You Tie");

        }
        else if(compPlays=="r"){
            console.log("Computuer chose Rock You Win");
        }
        else{
            console.log("Computuer chose Scissors You Lose");
        }
    break;
    case "s":
        if(compPlays=="p"){
            console.log("Computuer chose Paper You Win");

        }
        else if(compPlays=="r"){
            console.log("Computuer chose Rock You Lose");
        }
        else{
            console.log("Computuer chose Scissors You Tie");
        }
    break;

  }




  

}