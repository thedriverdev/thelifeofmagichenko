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
 
/* 
 const desktopMessage =
  "THIS GAME IS PLAYABLE ONLY ON MOBILE DEVICES<br><br>PLEASE LOG ON USING YOUR SMARTPHONE OR TABLET<br><br>SMARTPHONES ARE RECOMMENDED FOR A BETTER GAMING EXPERIENCE";
 
 function isMobile() {
  return /Mobi|Android/i.test(navigator
   .userAgent);
 }
 
 if (!isMobile()) {
  parent.innerHTML =
   desktopMessage;
  parent.style.textAlign = "center";
  parent.style.marginTop = "250px";
  parent.style.fontSize = "30px";
  parent.style.fontWeight = "bold";
 }
*/
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
 