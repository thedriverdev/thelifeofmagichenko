//Submit name to play!
let shooterNomDisplay = document
 .getElementById("shooterNom");


let playerNameArea = document
 .getElementById("playerName");

let input = document.getElementById(
 "input");
let submit = document.getElementById(
 "submit");

let red;

setTimeout(()=>{
  pageLoadShots.play();
}, 3000);  

function enableTrigger() {

 if (input.value.trim() === "") {

  input.value = "Magichenko";
  submit.innerText = "Play as Magichenko?";

 } else {

  input.value = input.value.trim();

  shooterNomDisplay.innerHTML = "Shooter: " + input.value;

  let paragraph1 = "GAME ON!";

  let letters1 = paragraph1.split('');

  function displayLetters1() {
   if (letters1.length === 0)
    return;
   let letter1 = letters1.shift();

   display1.innerHTML += letter1;

   setTimeout(displayLetters1, 10);
  }
  displayLetters1();

  let paragraph2 =
   "SET THE HIGHEST SCORE POSSIBLE WITHIN THE SET TIME!";

  let letters2 = paragraph2.split('');

  function displayLetters2() {
   if (letters2.length === 0)
    return;
   let letter2 = letters2.shift();
   display2.innerHTML += letter2;
   setTimeout(displayLetters2, 15);
  }
  displayLetters2();

  let paragraph3 =
   "EXPECT UPDATES FOR BETTER GAMING EXPERIENCE!";

  let letters3 = paragraph3.split('');

  function displayLetters3() {
   if (letters3.length === 0)
    return;
   let letter3 = letters3.shift();
   display3.innerHTML += letter3;
   setTimeout(displayLetters3, 10);
  }
  displayLetters3();

  let paragraph4 =
   "WANNA DONATE TO ALFRED'S TECH CAREER? FIRST CITY MONUMENT BANK (FCMB) 6 3 0 5 8 7 1 0 1 8";

  let letters4 = paragraph4.split('');

  function displayLetters4() {
   if (letters4.length === 0)
    return;
   let letter4 = letters4.shift();
   display4.innerHTML += letter4;
   setTimeout(displayLetters4, 10);
  }
  displayLetters4();

  function tellMessage() {
   if (letters5.length === 0)
    return;
   let letter5 = letters5.shift();
   timer.innerHTML +=
    letter5;
   setTimeout(tellMessage, 20);
  }
  tellMessage();

  // Retrieve world highscore after page first loads
  fetch("https://oneidledev-001-site1.otempurl.com/api/TLOMHighScore", {
    method: "GET",
    headers: {
      "Content-Type": "application/json"
    }
  })
  .then(response => response.json())
  .then(data => {
      if (data) {
        console.log(`Player: ${data.playerName}, Score: ${data.score}`);
        

        worldHighScore = `${data.score}`;
        worldHighScorer = `${data.playerName}`;

        setTimeout(()=>{
            worldHighScoreDisplay.innerHTML = `Retrieving World Highscore...`;
        }, 1000);
        setTimeout(()=>{
            worldHighScoreDisplay.innerHTML = `World Highscore retrieved!`;
        }, 2000);
        setTimeout(()=>{
            worldHighScoreDisplay.innerHTML = `World Highscore: ${data.playerName} - ₦${data.score}`;
        }, 3000);

        // Upload local highscore if higher than world highscore
        setTimeout(()=> {
          if (highScore >= data.score && highScorer !== data.playerName) {

            setTimeout(() => {
              highScoreDisplay.innerHTML = "Uploading new world highscore...";
              highscoreBreak.play();
        
              fetch("https://oneidledev-001-site1.otempurl.com/api/TLOMHighScore", {
                method: "POST",
                headers: {
                  "Content-Type": "application/json",
                  "X-API-KEY": xydfg
                },
                body: JSON.stringify({
                  PlayerName: highScorer,
                  Score: highScore
                })
              })
              .then(response => response.json())
              .then(data => console.log(data.PlayerName))
              .catch(error => console.error(error));
        
            }, 1000);
              
            setTimeout(() => {
              highScoreDisplay.innerHTML = "New world highscore uploaded!";
            
            }, 3000);
            
            setTimeout(() => {
              highScoreDisplay.innerHTML = "Highscore: " + highScorer + " - ₦" + highScore;
            }, 5000);

              // Receive World Highscore from server after game area loads
              setTimeout(() => { 
                fetch("https://oneidledev-001-site1.otempurl.com/api/TLOMHighScore", {
                  method: "GET",
                  headers: {
                      "Content-Type": "application/json"
                  }
                })
                .then(response => response.json())
                .then(data => {
                  if (data) {
                    console.log(`Player: ${data.playerName}, Score: ${data.score}`);
                    

                    worldHighScore = `${data.score}`;
                    worldHighScorer = `${data.playerName}`;

                    setTimeout(()=>{
                        worldHighScoreDisplay.innerHTML = `Retrieving World Highscore...`;
                    }, 1000);
                    setTimeout(()=>{
                        worldHighScoreDisplay.innerHTML = `World Highscore retrieved!`;
                    }, 3000);
                    setTimeout(()=>{
                        worldHighScoreDisplay.innerHTML = `World Highscore: ${data.playerName} - ₦${data.score}`;
                    }, 5000);


                  } else {
                    console.log("No high score data found.");
                  }
                })
                .catch(error => console.error("Error fetching highest score:", error));
              }, 6000);

          }
          else {
            setTimeout(() => {
              highScoreDisplay.innerHTML = "Score did not upload!";
            
            }, 2000);
            
            setTimeout(() => {
              highScoreDisplay.innerHTML = "Highscore: " + highScorer + " - ₦" + highScore;
            }, 4000);
          }
        }, 5000);

      } else {
          console.log("No high score data found.");
      }
    })
    .catch(error => console.error("Error fetching highest score:", error));

  expressions.innerText = input.value +
   ": Alrighty, boss!";
  shooterNomDisplay.innerHTML =
   "Shooter: " + input.value;
  billBoard.style.display = "block";

  function displayAuthor() {
   if (authorLetters.length === 0)
    return;
   let authorLetter = authorLetters
    .shift();
   authorDisplay.innerHTML +=
    authorLetter;
   setTimeout(displayAuthor, 50);
  }
  displayAuthor();

  playerNameArea.style.display = "none";
  authorDisplay1.style.display = "none";

  gameArea.style.display = "block";


  function switchTheme() {
   parent.classList.toggle("black");
   parent.classList.toggle("green");
   highScoreDisplay.classList.toggle("black");
   highScoreDisplay.classList.toggle("green");
   worldHighScoreDisplay.classList.toggle("black");
   worldHighScoreDisplay.classList.toggle("green");
   themeSwitch.classList.toggle(
    "black");
   billBoard.classList.toggle(
    "green");
   if (themeSwitch.innerText ===
    "NVG: Off") {
    themeSwitch.innerText = "NVG: On";
   } else if (themeSwitch
    .innerText ===
    "NVG: On") {
    themeSwitch.innerText =
     "NVG: Off";
   }
   themeSwitch.classList.toggle(
    "green");
    nvgSwitch.play();
  }
  themeSwitch.addEventListener(
   "click",
   switchTheme);

   // Gun load and cock sound
   setTimeout(()=>{
    gunLoad.play();
   }, 0);
   setTimeout(()=>{
    gunCock.play();
   }, 500);

  function countDownTimer() {
   setTimeout(() => {
    timer.innerHTML =
     "00:45 seconds...";
   }, 0);
   setTimeout(() => {
    timer.innerHTML =
     "00:44 seconds...";
   }, 1000);
   setTimeout(() => {
    timer.innerHTML =
     "00:43 seconds...";
   }, 2000);
   setTimeout(() => {
    timer.innerHTML =
     "00:42 seconds...";
     lightMachineGun.play();
   }, 3000);
   setTimeout(() => {
    timer.innerHTML =
     "00:41 seconds...";
   }, 4000);
   setTimeout(() => {
    timer.innerHTML =
     "00:40 seconds...";
   }, 5000);
   setTimeout(() => {
    timer.innerHTML =
     "00:39 seconds...";
   }, 6000);
   setTimeout(() => {
    timer.innerHTML =
     "00:38 seconds...";
   }, 7000);
   setTimeout(() => {
    timer.innerHTML =
     "00:37 seconds...";
   }, 8000);
   setTimeout(() => {
    timer.innerHTML =
     "00:36 seconds...";
   }, 9000);
   setTimeout(() => {
    timer.innerHTML =
     "00:35 seconds...";
   }, 10000);
   setTimeout(() => {
    timer.innerHTML =
     "00:34 seconds...";
   }, 11000);
   setTimeout(() => {
    timer.innerHTML =
     "00:33 seconds...";
   }, 12000);
   setTimeout(() => {
    timer.innerHTML =
     "00:32 seconds...";
   }, 13000);

   setTimeout(() => {
    timer.innerHTML =
     "00:31 seconds...";
   }, 14000);
   setTimeout(() => {
    timer.innerHTML =
     "00:30 seconds...";
   }, 15000);
   setTimeout(() => {
    timer.innerHTML =
     "00:29 seconds...";
   }, 16000);
   setTimeout(() => {
    timer.innerHTML =
     "00:28 seconds...";
   }, 17000);
   setTimeout(() => {
    timer.innerHTML =
     "00:27 seconds...";
   }, 18000);
   setTimeout(() => {
    timer.innerHTML =
     "00:26 seconds...";
   }, 19000);
   setTimeout(() => {
    timer.innerHTML =
     "00:25 seconds...";
   }, 20000);

   setTimeout(() => {
    timer.innerHTML =
     "00:24 seconds...";
   }, 21000);
   setTimeout(() => {
    timer.innerHTML =
     "00:23 seconds...";
   }, 22000);
   setTimeout(() => {
    timer.innerHTML =
     "00:22 seconds...";
   }, 23000);
   setTimeout(() => {
    timer.innerHTML =
     "00:21 seconds...";
   }, 24000);


   setTimeout(() => {
    timer.innerHTML =
     "00:20 seconds...";
     highscoreBreak.play();
   }, 25000);
   setTimeout(() => {
    timer.innerHTML =
     "00:19 seconds...";
   }, 26000);
   setTimeout(() => {
    timer.innerHTML =
     "00:18 seconds...";
   }, 27000);
   setTimeout(() => {
    timer.innerHTML =
     "00:17 seconds...";
   }, 28000);
   setTimeout(() => {
    timer.innerHTML =
     "00:16 seconds...";
   }, 29000);
   setTimeout(() => {
    timer.innerHTML =
     "00:15 seconds...";
   }, 30000);
   setTimeout(() => {
    timer.innerHTML =
     "00:14 seconds...";
   }, 31000);
   setTimeout(() => {
    timer.innerHTML =
     "00:13 seconds...";
   }, 32000);
   setTimeout(() => {
    timer.innerHTML =
     "00:12 seconds...";
   }, 33000);
   setTimeout(() => {
    timer.innerHTML =
     "Missile incoming!!";
   }, 34000);
   setTimeout(() => {
    timer.innerHTML =
     "Missile incoming!!";
     missile.play();
   }, 35000);
   setTimeout(() => {
    timer.innerHTML =
     "00:09 seconds...";
   }, 36000);
   setTimeout(() => {
    timer.innerHTML =
     "00:08 seconds...";
   }, 37000);
   setTimeout(() => {
    timer.innerHTML =
     "00:07 seconds...";
   }, 38000);
   setTimeout(() => {
    timer.innerHTML =
     "00:06 seconds...";
   }, 39000);
   setTimeout(() => {
    timer.innerHTML =
     "00:05 seconds...";
   }, 40000);
   setTimeout(() => {
    timer.innerHTML =
     "00:04 seconds...";
   }, 41000);
   setTimeout(() => {
    timer.innerHTML =
     "00:03 seconds...";
   }, 42000);
   setTimeout(() => {
    timer.innerHTML =
     "00:02 seconds...";
   }, 43000);
   setTimeout(() => {
    timer.innerHTML =
     "00:01 second...";
   }, 44000);
   setTimeout(() => {
    timer.innerHTML =
     "00:00 second...";
     gunJammed.play();
    trigger.disabled = true;
// World Highscore
    if (scoreCount < (75 / 100) *
     worldHighScore && scoreCount >= (1 /
      2) *
      worldHighScore) {
     setTimeout(() => {
      theMan.innerHTML =
       player2 +
       ": Below 75%. Not good enough, Sergeant " +
       input.value +
       ". Do it again.";
     }, 1000);
     setTimeout(() => {
      expressions.innerHTML =
       input.value +
       ": Yes, " + player2 + ".";
     }, 2000);
    } else if (scoreCount < (1 /
      2) *
      worldHighScore && scoreCount >= (
      10 /
      100) * worldHighScore) {
     setTimeout(() => {
      theMan.innerHTML =
       player2 +
       ": Too poor, Corporal " +
       input.value +
       "! Do it again!";
     }, 1000);
     setTimeout(() => {
      expressions.innerHTML =
       input.value +
       ": Of course, " + player2;
     }, 2000);
    } else if (scoreCount >= (75 /
      100) *
      worldHighScore && scoreCount <= (9 /
      10) * worldHighScore) {
     theMan.style.fontSize = "12px";
     setTimeout(() => {
      theMan.innerHTML =
       player2 +
       ": Bravo, Captain " + input
       .value +
       "!";
     }, 1000);
     setTimeout(() => {
      expressions.innerHTML =
       input.value +
       ": Thanks, " + player2 + ".";
     }, 2000);

    } else if (scoreCount > (9 /
      10) *
      worldHighScore && scoreCount <=
      (worldHighScore - 0.1)
    ) {
     setTimeout(() => {
      theMan.innerHTML =
       player2 +
       ": Excellent!! You're amazing, Colonel " +
       input.value + " 🙌🏾🙌🏾";
     }, 1000);
     setTimeout(() => {
      expressions.innerHTML =
       input.value +
       ": Thank you, " + player2 +
       ".";
     }, 2000);

    } else if (scoreCount >=
      worldHighScore) {
     setTimeout(() => {
      theMan.innerHTML =
       player2 +
       ": You are the new lord of war! General " +
       input.value + " 🫡";
     }, 1000);
     setTimeout(() => {
      expressions.innerHTML =
       input.value +
       ": I sure am, " + player2 +
       " 🫡";
     }, 2000);
    } else if (bulletCount >
     scoreCount || scoreCount < (1 /
      10) * worldHighScore) {
     setTimeout(() => {
      theMan.innerHTML =
       player2 +
       ": Too poor! You wasted those bullets, Private " +
       input.value + ".";
     }, 1000);
     setTimeout(() => {
      expressions.innerHTML =
       input.value +
       ": I'll try again, sir!😡";
     }, 2000);
    }
    trigger.removeEventListener(
     "touchstart", red);
    trigger.removeEventListener(
     "touchend", yellow);

    trigger.style.backgroundColor =
     "grey";
    trigger.style.color = "black";
    trigger.innerHTML = "Jammed!";

    parent.style.color = "grey";
    highScoreDisplay.style.color = "grey";
    highScoreDisplay.style.borderBottom = "1px dashed red";
   }, 45000);

   setTimeout(() => {
    parent.style.color = "grey";
    timer.innerHTML = "Time up!!";

    // Score upload

    if (scoreCount < 1) {
     setTimeout(() => {
      highScoreDisplay
       .innerHTML =
       "Score below ₦1.";
     }, 1000);
     setTimeout(() => {
      highScoreDisplay
       .innerHTML =
       "Will not upload.";
     }, 3000);
     setTimeout(() => {
      if (scoreCount >= highScore) {
        highScoreDisplay.innerHTML =
       "New Highscore: " +
       input.value +
       " - ₦" +
       scoreCount; 
      } else {
        highScoreDisplay.innerHTML =
       "Highscore: " +
       currentHighScorer +
       " - ₦" +
       currentHighScore;
      }
      
     }, 5000);

    } else if (scoreCount >= 1) {
     setTimeout(() => {
      highScoreDisplay
       .innerHTML =
       "Uploading your score...";
     }, 1000);
     setTimeout(() => {
      highScoreDisplay
       .innerHTML =
       "Score uploaded!";
       //Send to server
       fetch("https://oneidledev-001-site1.otempurl.com/api/TLOMHighScore", {
        method: "POST",
        headers: {
         "Content-Type": "application/json",
         "X-API-KEY": xydfg
        },
        body: JSON.stringify({
         PlayerName: input.value,
         Score: scoreCount
        })
       })
       .then(response => response.json())
       .then(data => console.log(data.PlayerName))
       .catch(error => console.error(error));

     }, 3000);

     setTimeout(() => {
      if (scoreCount >= highScore) {
        highScoreDisplay.innerHTML =
       "New Highscore: " +
       input.value +
       " - ₦" +
       scoreCount; 
      } else {
        highScoreDisplay.innerHTML =
       "Highscore: " +
       currentHighScorer +
       " - ₦" +
       currentHighScore;
      }
      
     }, 5000);
    } else if (scoreCount >= worldHighScore){

     setTimeout(() => {
      highScoreDisplay
       .innerHTML =
       "Uploading new world highscore...";
       highscoreBreak.play();
     }, 1000);

     setTimeout(() => {
      highScoreDisplay
       .innerHTML =
       "New world highscore uploaded!";

       fetch("https://oneidledev-001-site1.otempurl.com/api/TLOMHighScore", {
        method: "POST",
        headers: {
         "Content-Type": "application/json",
         "X-API-KEY": xydfg
        },
        body: JSON.stringify({
         PlayerName: input.value,
         Score: scoreCount
        })
       })
       .then(response => response.json())
       .then(data => console.log(data.PlayerName))
       .catch(error => console.error(error));

     }, 3000);

     setTimeout(() => {
      highScoreDisplay.innerHTML = "New Highscore: " + input.value + " - ₦" + scoreCount;
     }, 5000);
     

    }


   }, 46000);
   setTimeout(() => {
        // Receive World Highscore from server after time ends
  fetch("https://oneidledev-001-site1.otempurl.com/api/TLOMHighScore", {
    method: "GET",
    headers: {
      "Content-Type": "application/json"
  }
  })
  .then(response => response.json())
  .then(data => {
    if (data) {
      console.log(`Player: ${data.playerName}, Score: ${data.score}`);
      

      worldHighScore = `${data.score}`;
      worldHighScorer = `${data.playerName}`;

      setTimeout(()=>{
          worldHighScoreDisplay.textContent = `Retrieving World Highscore...`;
      }, 3000);
      setTimeout(()=>{
          worldHighScoreDisplay.textContent = `World Highscore retrieved!`;
          missile.play();
      }, 5000);
      setTimeout(()=>{
          worldHighScoreDisplay.textContent = `World Highscore: ${data.playerName} - ₦${data.score}`;
      }, 7000);


    } else {
        console.log("No high score data found.");
    }
  })
  .catch(error => console.error("Error fetching highest score:", error));

   }, 55000);

   trigger.removeEventListener(
    "click",
    countDownTimer);
   timer.style.fontSize = "13px";
  }
  trigger.addEventListener("click",
   countDownTimer);


  trigger.disabled = false;
  setTimeout(() => {
   trigger.innerText =
    "Trigger!";
   trigger.style.backgroundColor =
    "blue";
   trigger.style.color = "grey";
  }, 50);
  setTimeout(() => {
   trigger.innerText =
    "Loading AK47 🤫";
   trigger.style.backgroundColor =
    "cornflowerblue";
   trigger.style.color = "black";
  }, 1000);
  setTimeout(() => {
   trigger.innerText =
    "Fire at will😊";
   trigger.style.backgroundColor =
    "orange";
   trigger.style.color = "black";
  }, 2000);

  let red = () => {
   //trigger.innerText = "Firing🥵";
   trigger.style.backgroundColor =
    "red";
   trigger.style.color = "orange";
  }
  trigger.addEventListener(
   "touchstart",
   red);

  let yellow = () => {

   trigger.style.backgroundColor =
    "yellow";
  }
  trigger.addEventListener("touchend",
   yellow);

 }
 submitShot.play();
}
submit.onclick = enableTrigger;
