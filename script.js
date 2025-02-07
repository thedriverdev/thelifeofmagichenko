let parent = document.getElementById(
  "parent");
 
 let gameArea = document.getElementById(
  "game");
 gameArea.style.display = "none";
 
 let bulletCountDisplay = document
  .getElementById("bulletCountDisplay");
 let firing = document.getElementById(
  "firing");
 let expressions = document
  .getElementById("magichenko");
 let trigger = document.getElementById(
  "trigger");
 
 let bulletCount = 0;
 let firingRate = 0;
 
let momentBillboard = document.querySelector(".momentBillboard");

let date = new Date();

let day = date.getDate().toString().padStart(2,'0');
let month = date.toLocaleString('default', {month:'short'});
let year = date.getFullYear().toString().padStart(2,'0');
let hour = date.getHours().toString().padStart(2,'0');
let minute = date.getMinutes().toString().padStart(2,'0');
hour = hour % 12;
let period = hour <= 12 ? "AM" : "PM";

function updateClock() {
  momentBillboard.innerHTML = `${day}-${month}-${year} | ${hour}:${minute} ${period}`;
  const desktopMessage =
  `${day}-${month}-${year} | ${hour}:${minute} ${period} <br><br><br><br><br><br> THIS GAME IS PLAYABLE ONLY ON MOBILE DEVICES<br><br>PLEASE LOG ON USING YOUR SMARTPHONE OR TABLET<br><br>SMARTPHONES ARE RECOMMENDED FOR A BETTER GAMING EXPERIENCE`;
}

setInterval(updateClock, 60000);
 
 function isMobile() {
  return /Mobi|Android/i.test(navigator
   .userAgent);
 }
 
 if (!isMobile()) {
  parent.innerHTML =
   desktopMessage;
  parent.style.textAlign = "center";
  parent.style.marginTop = "50px";
  parent.style.fontSize = "30px";
  parent.style.fontWeight = "bold";
 }

 function shoot() {
  bulletCount++;
  bulletCountDisplay.innerHTML =
   "Bullets count: " + bulletCount;
  if (firingRate > 21) {
   bulletCountDisplay.innerHTML =
    "Bullets count: " + bulletCount +
    " Gun overheating!";
   bulletCountDisplay.style.color =
    "red";
  }
  trigger.innerText = "Firing🥵";
 }
 trigger.addEventListener("click", shoot);
 
 let billBoard = document.getElementById(
  "billBoard");
 billBoard.style.display = "none";
 