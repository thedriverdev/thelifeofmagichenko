const worldHighScoreHeading = document.getElementById("wHiScoHeading");
const worldHighScoreSubHeading = document.getElementById("wHiScoFooter");
const xydfg = "Zzdf1zxkj=-Zsdfzsxz$-Zxdfzxkj%-Azdfxszx$&";
const worldHighScoreList = document.querySelector(".wHiScoList");
const steppenwolf = document.querySelector(".steppenwolf tbody");
const steppenwolfVoice = document.querySelector(".steppenwolfvoice");
worldHighScoreHeading.innerHTML = "CONNECT TO INTERNET TO VIEW TOP SCORES";
worldHighScoreSubHeading.innerHTML = "EXPECT UPDATES FOR BETTER VIEWING EXPERIENCE!";

steppenwolf.style.textAlign = "center";
steppenwolf.style.marginTop = "5px";
steppenwolf.style.fontSize = "15px";
steppenwolf.style.fontWeight = "bold";

/*
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

 */


  // Receive Top 1000 World Highscores from server

    fetch("https://oneidledev-001-site1.otempurl.com/api/TLOMHighScore/Top1000", {
      method: "GET",
      headers: {
          "Content-Type": "application/json"
      }
    })
    .then(response => response.json())
    .then(data => {
      if (data.length > 1) {
        worldHighScoreHeading.innerHTML = `TOP ${data.length} HIGH SCORES OF ALL TIME!`;
      } else {
        worldHighScoreHeading.innerHTML = `TOP HIGH SCORE OF ALL TIME!`;
      }
      //steppenwolf.innerHTML = "";
      if (Array.isArray(data) && data.length > 0) {
        console.log(`Player: ${data.playerName}, Score: ${data.score}`);

        data.forEach((dat, index) => {
          let row = document.createElement("tr");
          row.innerHTML = `<td>${index + 1}</td>
          <td>${dat.playerName}</td>
          <td>${dat.score}</td>
          `
          steppenwolf.appendChild(row);
        });
  
      } else {
        steppenwolf.innerHTML = "No high score data found.";
      }
    })
    .catch(error => console.error("Error fetching highest score:", error));
