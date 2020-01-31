let flynnScore = 0;
let cluScore = 0;
const flynnScore_span = document.getElementById("flynn-score");
const cluScore_span = document.getElementById("clu-score");
const scoreBoard_div = document.querySelector(".score-board");
const result_p = document.querySelector(".result > p");
const rock_div = document.getElementById("r");
const paper_div = document.getElementById("p");
const scissors_div = document.getElementById("s");

function getCluChoice() {
    const choices = ['r', 'p', 's'];
    const randomNumber = Math.floor(Math.random() * 3);
    return choices[randomNumber]; 
}

function convertToWord(letter) {
    if (letter === "r") return "Rock";
    if (letter === "p") return "Paper";
    return "Scissors";
}

function win(flynnChoice, cluChoice) {
  flynnScore++;
  flynnScore_span.innerHTML = flynnScore;
  cluScore_span.innerHTML = cluScore;
  const smallFlynnWord = "flynn".fontsize(3).sub();
  const smallCluWord = "clu".fontsize(3).sub();
  result_p.innerHTML = `${convertToWord(flynnChoice)}${smallFlynnWord} beats ${convertToWord(cluChoice)}${smallCluWord}. You win!!!!!`;
  
}

function lose(flynnChoice, cluChoice) {
  cluScore++;
  //flynnScore_span.innerHTML = flynnScore;
  cluScore_span.innerHTML = cluScore;
  const smallFlynnWord = "flynn".fontsize(3).sub();
  const smallCluWord = "clu".fontsize(3).sub();
  result_p.innerHTML = `${convertToWord(cluChoice)}${smallCluWord} beats ${convertToWord(flynnChoice)}${smallFlynnWord}. You win!!!!!`;
 }

 function draw(flynnchoice, cluChoice) {
   const smallFlynnWord = "flynn".fontsize(3).sub();
   const smallCluWord = "clu".fontsize(3).sub();
   result_p.innerHTML = `${convertToWord(flynnChoice)}${smallFlynnWord}${convertToWord(cluChoice)}${smallCluWord}. Its A Draw!!!!!`;
 }

function game(flynnChoice) {
  const cluChoice = getCluChoice();
  switch (flynnChoice + cluChoice) {
      case "rs":
      case "pr":
      case "sp":
         win(flynnChoice, cluChoice);
          break;
      case "rp":
      case "ps":
      case "sr":
         lose(flynnChoice, cluChoice);
          break;
      case "rr":
      case "pp":
      case "ss":
         draw(flynnChoice, cluChoice);
          break;

  }
}

function main() {
  rock_div.addEventListener('click', function() {
   game("r");
  })

  paper_div.addEventListener('click', function() {
    game("p");  
  })

  scissors_div.addEventListener('click', function() {
    game("s");  
  })  
}
