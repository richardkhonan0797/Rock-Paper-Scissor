let userScore = 0;
let compScore = 0;
const userScore_span = document.getElementById("user-score");
const compScore_span = document.getElementById("computer-score");
const scoreBoard_div = document.querySelector("scoreboard");
const result_p = document.querySelector(".result > p");
const rock_div = document.getElementById("r");
const paper_div = document.getElementById("p");
const scissor_div = document.getElementById("s");

function getComputerChoice() {
  const choices = ["r", "p", "s"];
  const randomNumber = Math.floor(Math.random() * 3);
  return choices[randomNumber];
}

function win(userChoice, computerChoice) {
  userScore++;
  userScore_span.innerHTML = userScore;
  compScore_span.innerHTML = compScore;
  const smallUserWord = "(user)".fontsize(3).sub();
  const smallCompWord = "(comp)".fontsize(3).sub();
  result_p.innerHTML = `${convertLetterToWord(userChoice)}${smallUserWord} beats
    ${convertLetterToWord(computerChoice)}${smallCompWord}. You Win!`;
  document.getElementById(userChoice).classList.add("green-glow");
  setTimeout(function() {
    document.getElementById(userChoice).classList.remove("green-glow");
  }, 300);
}

function lose(userChoice, computerChoice) {
  compScore++;
  userScore_span.innerHTML = userScore;
  compScore_span.innerHTML = compScore;
  const smallUserWord = "user".fontsize(3).sub();
  const smallCompWord = "comp".fontsize(3).sub();
  result_p.innerHTML = `${convertLetterToWord(computerChoice)}${smallCompWord} 
    beats ${convertLetterToWord(userChoice)}${smallUserWord}. You Lose!`;
  document.getElementById(userChoice).classList.add("red-glow");
  setTimeout(function() {
    document.getElementById(userChoice).classList.remove("red-glow");
  }, 300);
}

function draw(userChoice) {
  userScore_span.innerHTML = userScore;
  compScore_span.innerHTML = compScore;
  result_p.innerHTML = "It's a draw!";
  document.getElementById(userChoice).classList.add("gray-glow");
  setTimeout(function() {
    document.getElementById(userChoice).classList.remove("gray-glow");
  }, 300);
}

function convertLetterToWord(letter) {
  if (letter === "r") return "Rock";
  if (letter === "p") return "Paper";
  return "Scissor";
}

function game(userChoice) {
  const computerChoice = getComputerChoice();
  switch (userChoice + computerChoice) {
    case "rs":
    case "pr":
    case "sp":
      win(userChoice, computerChoice);
      break;
    case "rp":
    case "ps":
    case "sr":
      lose(userChoice, computerChoice);
      break;
    case "rr":
    case "pp":
    case "ss":
      draw(userChoice);
      break;
  }
}

function main() {
  rock_div.addEventListener("click", function() {
    game("r");
  });
  paper_div.addEventListener("click", function() {
    game("p");
  });
  scissor_div.addEventListener("click", function() {
    game("s");
  });
}

main();
