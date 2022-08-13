let answer;
let randomNumber1;
let randomNumber2;
let randomNumber3;
let randomNumber4;
let score = 0;
let highScore = 0;
let generateNum;
let gameOver;
let score2 = score > 3 && score < 6 ? score : "";
const scoreBoard = document.querySelector(".score");
const highScoreBoard = document.querySelector(".highScore");
const message = document.querySelector(".message");
const messageone = document.querySelector(".messageone");
const restartGame = document.querySelector(".restartGame");
const start = document.querySelector(".start");
const check = document.querySelector(".check");
const restart = document.querySelector(".reset");
const userInput = document.querySelector(".guess");
const img = document.querySelector("img");
generateNum = () => {
  randomNumber1 = Math.floor(Math.random() * 10) + 1;
  randomNumber2 = Math.floor(Math.random() * 10) + 1;
  answer = randomNumber1 + randomNumber2;
  if (messageone?.innerText == "" || messageone?.innerText == null)
    return;
  messageone.innerText = `${randomNumber1} + ${randomNumber2} = `;
  if (userInput?.value == "" || userInput?.value == null)
    return;
};
gameOver = () => {
  if (message?.innerText == "" || message?.innerText == null)
    return;
  message.innerText = "Game Over...!";
  if (messageone?.innerText == "" || messageone?.innerText == null)
    return;
  messageone.innerText = "Game Over...!";
  if (restartGame?.innerText == "" || restartGame?.innerText == null)
    return;
  restartGame.innerText = "Play Again...!";
  if (scoreBoard?.innerText == "" || scoreBoard?.innerText == null)
    return;
  scoreBoard.innerText = String(score);
  if (userInput?.value !== "" || restartGame?.innerText == null)
    return;
  restartGame.innerText = "";
};
start?.addEventListener("click", function() {
  if (message?.innerText == "" || message?.innerText == null)
    return;
  message.innerText = "start...!";
  if (scoreBoard?.innerText || scoreBoard?.innerText == null)
    return;
  scoreBoard.innerText = "0";
  let score3 = 1;
  generateNum();
});
check?.addEventListener("click", function() {
  if (userInput?.value == "" || userInput?.value == null)
    return;
  let num = Number(userInput.value);
  if (num === answer) {
    if (message?.innerText == "" || message?.innerText == null)
      return;
    message.innerText = "Correct!";
    if (scoreBoard?.innerText == "" || scoreBoard?.innerText == null)
      return;
    score += 1;
    scoreBoard.innerText = String(score);
    generateNum();
    userInput.value = "";
  } else if (num !== answer && score > 0) {
    if (message?.innerText == "" || message?.innerText == null)
      return;
    message.innerText = "Wrong!";
    if (scoreBoard?.innerText == "" || scoreBoard?.innerText == null)
      return;
    score -= 1;
    scoreBoard.innerText = String(score);
    generateNum();
    userInput.value = "";
  } else if (num !== answer) {
    gameOver();
  }
});
