//localStorage.clear();
let worldHighScoreDisplay = document
 .getElementById("wHiSco");
 worldHighScoreDisplay.style.marginBottom = "7px";
 worldHighScoreDisplay.style.fontWeight = "bold";

 function goTowHiScoList() {
   window.open('worldHighScores.html', '_blank');
 }
 worldHighScoreDisplay.onclick = goTowHiScoList;

let worldHighScore = 0;
let worldHighScorer;

worldHighScoreDisplay.innerHTML =
 "World Highscore: Connect to server to sync score.";

let highScoreDisplay = document
 .getElementById("hiSco");

// Code to clear Local HighScore
function clearHighScore() {

 setTimeout(() => {
  highScoreDisplay.innerHTML =
   "Clearing highscore in 3.";
  trigger.innerHTML =
   "Clearing highscore in 3.";
 }, 0);
 setTimeout(() => {
  highScoreDisplay.innerHTML =
   "Clearing highscore in 2.";
  trigger.innerHTML =
   "Clearing highscore in 2.";
 }, 1000);
 setTimeout(() => {
  highScoreDisplay.innerHTML =
   "Clearing highscore in 1.";
  trigger.innerHTML =
   "Clearing highscore in 1.";
 }, 2000);
 setTimeout(() => {
  highScoreDisplay.innerHTML =
   "Highscore cleared!";
  trigger.innerHTML =
   "Highscore cleared!";
   localScoreDelete.play();
  localStorage.clear();
 }, 3000);
 setTimeout(() => {
  highScoreDisplay.innerHTML =
   "Refresh page!";
  trigger.innerHTML =
   "Refresh page!";
 }, 5000);

}
highScoreDisplay.onclick =
 clearHighScore;

let scoreCountDisplay = document
 .getElementById(
  "scoreCountDisplay");

let highScore = localStorage.getItem(
 "highScore") || 0;

let currentHighScore = localStorage
 .getItem("highScore");

let highScorer = localStorage.getItem(
 "highScorer") || "The Man";
let currentHighScorer = localStorage
 .getItem("highScorer");



highScoreDisplay.innerHTML =
 "Highscore: " + highScorer +
 " - ₦" +
 highScore;
highScoreDisplay.style.fontWeight =
 "bold";
let scoreCount = 0;

function updateScoreCount() {

 if (firingRate === 0) {
  scoreCountDisplay.innerHTML =
   "Score: ₦" + (scoreCount += 0);

 } else if (firingRate === 1) {
  scoreCountDisplay.innerHTML =
   "Score: ₦" + (scoreCount +=
    1);

 } else if (firingRate === 2) {
  scoreCountDisplay.innerHTML =
   "Score: ₦" + (scoreCount +=
    1);

 } else if (firingRate === 3) {
  scoreCountDisplay.innerHTML =
   "Score: ₦" + (scoreCount +=
    2);

 } else if (firingRate === 4) {
  scoreCountDisplay.innerHTML =
   "Score: ₦" + (scoreCount +=
    3);

 } else if (firingRate === 5) {
  scoreCountDisplay.innerHTML =
   "Score: ₦" + (scoreCount +=
    5);

 } else if (firingRate === 6) {
  scoreCountDisplay.innerHTML =
   "Score: ₦" + (scoreCount +=
    8);

 } else if (firingRate === 7) {
  scoreCountDisplay.innerHTML =
   "Score: ₦" + (scoreCount +=
    13);

 } else if (firingRate === 8) {
  scoreCountDisplay.innerHTML =
   "Score: ₦" + (scoreCount +=
    21);

 } else if (firingRate === 9) {
  scoreCountDisplay.innerHTML =
   "Score: ₦" + (scoreCount +=
    34);

 } else if (firingRate === 10) {
  scoreCountDisplay.innerHTML =
   "Score: ₦" + (scoreCount +=
    55);

 } else if (firingRate === 11) {
  scoreCountDisplay.innerHTML =
   "Score: ₦" + (scoreCount +=
    89);

 } else if (firingRate === 12) {
  scoreCountDisplay.innerHTML =
   "Score: ₦" + (scoreCount +=
    144);

 } else if (firingRate === 13) {
  scoreCountDisplay.innerHTML =
   "Score: ₦" + (scoreCount +=
    233);

 } else if (firingRate === 14) {
  scoreCountDisplay.innerHTML =
   "Score: ₦" + (scoreCount +=
    377);

 } else if (firingRate === 15) {
  scoreCountDisplay.innerHTML =
   "Score: ₦" + (scoreCount +=
    610);

 } else if (firingRate === 16) {
  scoreCountDisplay.innerHTML =
   "Score: ₦" + (scoreCount +=
    987);

 } else if (firingRate === 17) {
  scoreCountDisplay.innerHTML =
   "Score: ₦" + (scoreCount +=
    1597);

 } else if (firingRate === 18) {
  scoreCountDisplay.innerHTML =
   "Score: ₦" + (scoreCount +=
    2584);

 } else if (firingRate === 19) {
  scoreCountDisplay.innerHTML =
   "Score: ₦" + (scoreCount +=
    4181);

 } else if (firingRate === 20) {
  scoreCountDisplay.innerHTML =
   "Score: ₦" + (scoreCount +=
    6765);

 } else if (firingRate >= 21) {
  bulletCount--;
 }

}
trigger.addEventListener("click",
 updateScoreCount);

// Update highscore

function updateHighScore() {
// Local Highscore
 if (scoreCount >= highScore) {
  highScoreDisplay.innerHTML =
   "New Highscore: " + input.value +
   " - ₦" +
   scoreCount;
  localStorage.setItem("highScore",
   scoreCount);
  localStorage.setItem("highScorer",
   input.value);
  highScoreDisplay.style.fontWeight =
   "bold";
  highScoreDisplay.style.color =
   "cornflowerblue";

 }

 if (scoreCount >
  worldHighScore) {

  worldHighScoreDisplay.innerHTML =
   "New World Highscore: " + input
   .value +
   " - ₦" +
   scoreCount;
  worldHighScoreDisplay.style.color =
   "red";
  worldHighScoreDisplay.style
   .fontWeight = "bold";

 }

}
trigger.addEventListener("click",
 updateHighScore);
