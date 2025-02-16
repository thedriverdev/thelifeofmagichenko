const worldHighScoreHeading = document.getElementById("wHiScoHeading");
const xydfg = "Zzdf1zxkj=-Zsdfzsxz$-Zxdfzxkj%-Azdfxszx$&";
const worldHighScoreList = document.querySelector(".wHiScoList");
const steppenwolf = document.querySelector(".steppenwolf");
const steppenwolfVoice = document.querySelector(".steppenwolfvoice");

worldHighScoreHeading.innerHTML = "PAGE IS UNDER DEVELOPMENT";
worldHighScoreHeading.style.textAlign = "center";
worldHighScoreHeading.style.marginTop = "120px";
worldHighScoreHeading.style.fontSize = "25px";
worldHighScoreHeading.style.fontWeight = "bold";

steppenwolf.style.textAlign = "center";
steppenwolf.style.marginTop = "5px";
steppenwolf.style.fontSize = "15px";
steppenwolf.style.fontWeight = "bold";

setTimeout(() => {
  steppenwolf.innerHTML =
   "EXIT BEFORE STEPPENWOLF APPEARS";
 }, 0);
 setTimeout(() => {
  steppenwolf.innerHTML =
   "EXIT BEFORE STEPPENWOLF APPEARS<br>00:10 seconds...";
 }, 1000);
 setTimeout(() => {
  steppenwolf.innerHTML =
   "EXIT BEFORE STEPPENWOLF APPEARS<br>00:09 seconds...";
 }, 2000);
 setTimeout(() => {
  steppenwolf.innerHTML =
   "EXIT BEFORE STEPPENWOLF APPEARS<br>00:08 seconds...";
 }, 3000);
 setTimeout(() => {
  steppenwolf.innerHTML =
   "EXIT BEFORE STEPPENWOLF APPEARS<br>00:07 seconds...";
 }, 4000);
 setTimeout(() => {
  steppenwolf.innerHTML =
   "EXIT BEFORE STEPPENWOLF APPEARS<br>00:06 seconds...";
 }, 5000);
 setTimeout(() => {
  steppenwolf.innerHTML =
   "EXIT BEFORE STEPPENWOLF APPEARS<br>00:05 seconds...";
 }, 6000);
 setTimeout(() => {
  steppenwolf.innerHTML =
   "EXIT BEFORE STEPPENWOLF APPEARS<br>00:04 seconds...";
 }, 7000);
 setTimeout(() => {
  steppenwolf.innerHTML =
   "EXIT BEFORE STEPPENWOLF APPEARS<br>00:03 seconds...";
 }, 8000);
 setTimeout(() => {
  steppenwolf.innerHTML =
   "EXIT BEFORE STEPPENWOLF APPEARS<br>00:02 seconds...";
 }, 9000);
 setTimeout(() => {
  steppenwolf.innerHTML =
   "EXIT BEFORE STEPPENWOLF APPEARS<br>00:01 second...";
 }, 10000);
 setTimeout(() => {
  steppenwolfVoice.play();
  steppenwolf.innerHTML =
   `<img src="steppenwolf.jpg" alt="Photo of Steppenwolf"><br>
    <p>I HAVE COME TO ENLIGHTEN YOU TO THE GREAT DARKNESS<br>I WILL BATHE IN YOUR FEAR</p>
   `;
 }, 11000);