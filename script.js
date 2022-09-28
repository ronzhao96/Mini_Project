
const compChoice =["r","p","s"];
var promptAns= prompt("Do you want to play Rock, paper, Scissors. Type Y for yes Type N for No");
var wCount=0;
var lCount=0;
var tCount=0;
while(promptAns=="Y"){
    rpsGame();
    promptAns=prompt("Do you want to play Rock, paper, Scissors. Type Y for yes Type N for No");

}


console.log("You have chosen to stop playing: You have won"+wCount+" You Have lost"+lCount+"You have tied"+tCount);



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
            lCount++;
        }
        else if(compPlays=="r"){
            console.log("Computuer chose Rock You Tie");
            tCount++;
        }
        else{
            console.log("Computuer chose Scissors You Win");
            wCount++;
        }

    break;
    case "p":
        if(compPlays=="p"){
            console.log("Computuer chose Paper You Tie");
            wCount++;

        }
        else if(compPlays=="r"){
            console.log("Computuer chose Rock You Win");
        }
        else{
            console.log("Computuer chose Scissors You Lose");
            lCount++;
        }
    break;
    case "s":
        if(compPlays=="p"){
            console.log("Computuer chose Paper You Win");
            wCount++;
            
        }
        else if(compPlays=="r"){
            console.log("Computuer chose Rock You Lose");
            lCount++;
          
        }
        else{
            console.log("Computuer chose Scissors You Tie");
            tCount++;
            
        }
    break;
       
  }




  

}