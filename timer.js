
let titleDisplay = document
 .getElementById(
  "title");
let titleText =
 "THE LIFE OF OGO MAGICHENKO | The Arcade";
let titleLetters = titleText
 .split(
  '');

function displayTitle() {
 if (titleLetters.length === 0)
  return;
 let titleLetter = titleLetters
  .shift();
 titleDisplay.innerHTML +=
  titleLetter;
 setTimeout(displayTitle, 50);
}
displayTitle();

let timerMessage =
 "Your time starts when you start firing.";

let letters5 = timerMessage.split('');
