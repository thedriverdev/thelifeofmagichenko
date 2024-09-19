let authorDisplay1 = document
 .getElementById(
  "author1");
let authorMessage1 =
 "Designed by ALFRED MAMMAN ODEY";
let authorLetters1 = authorMessage1
 .split(
  '');

function displayAuthor1() {
 if (authorLetters1.length === 0)
  return;
 let authorLetter1 = authorLetters1
  .shift();
 authorDisplay1.innerHTML +=
  authorLetter1;
 setTimeout(displayAuthor1, 50);
}
displayAuthor1();

let instructionDisplay = document
 .getElementById("instruction");

let instruction =
 "Submit a name or an alias to play.";


let instructionLetters = instruction
 .split('');


function displayInstruction() {
 if (instructionLetters.length === 0)
  return;
 let instructionLetter =
  instructionLetters.shift();

 instructionDisplay.innerHTML +=
  instructionLetter;

 setTimeout(displayInstruction, 10);
}
displayInstruction();


function clearInput() {
 input.value = "";
 submit.innerText = "Submit";
}
input.onclick = clearInput;


let headerDisplay = document
 .getElementById("header");

let header =
 "SHOOTING FOR HEALING";

let letters = header.split('');

function displayHeader() {
 if (letters.length === 0)
  return;
 let letter = letters.shift();
 headerDisplay.innerHTML += letter;
 setTimeout(displayHeader, 150);
}
displayHeader();

let authorDisplay = document
 .getElementById(
  "author");
let authorMessage =
 "Designed by ALFRED MAMMAN ODEY";
let authorLetters = authorMessage.split(
 '');