
display1 = document.getElementById(
  "display1");
 let display2 = document.getElementById(
  "display2");
 let display3 = document.getElementById(
  "display3");
 let display4 = document.getElementById(
  "display4");

// Send score to server after page loads
/*
if (currentHighScore >= (7/10 * worldHighScore) || currentHighScore > worldHighScore) {
     fetch("https://localhost:7217/api/TLOMHighScores", {
      method: "POST",
      headers: {
       "Content-Type": "application/json"
      },
      body: JSON.stringify({
       PlayerName: currentHighScorer,
       Score: currentHighScore
      })
     })
     .then(response => response.json())
     .then(data => console.log(data.PlayerName))
     .catch(error => console.error(error));
    }
*/


// Receive World Highscore from server after page loads
  fetch("https://localhost:7217/api/TLOMHighScores/TLOMhighestScore", {
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
        }, 5000);
        setTimeout(()=>{
            worldHighScoreDisplay.textContent = `World Highscore: ${data.playerName} - ₦${data.score}`;
        }, 7000);


    } else {
        console.log("No high score data found.");
    }
})
.catch(error => console.error("Error fetching highest score:", error));


/*
  fetch("https://localhost:7217/api/TLOMHighScores/highestScore", {
    method: "GET",
    headers: {
        "Content-Type": "application/json"
    }
})
.then(response => response.json())  // Make sure you're parsing the response as JSON
.then(data => {
    console.log(data);  // Check if the data is correctly received
    if (data) {
        // Handle the data
        data.forEach(highScore => {
            console.log(`Player: ${highScore.playerName}, Score: ${highScore.score}`);
            worldHighScore = `${highScore.score}`;
            worldHighScorer = `${highScore.playerName}`;

            setTimeout(()=>{
                worldHighScoreDisplay.textContent = `Retrieving World Highscore...`;
            }, 3000);
            setTimeout(()=>{
                worldHighScoreDisplay.textContent = `World Highscore retrieved!`;
            }, 5000);
            setTimeout(()=>{
                worldHighScoreDisplay.textContent = `World Highscore: ${highScore.playerName} - ₦${highScore.score}`;
            }, 7000);
        });
    } else {
        console.log("No data found");
    }
})
.catch(error => console.error("Error fetching high scores:", error));
*/

 // Get high score from server
 /*
 fetch("https://localhost:7217/api/TLOMHighScores")
   .then((response) => response.json())
   .then((data) => {
    
     // Update high score display on client-side
     
     worldHighScoreDisplay.textContent = `World Highscore ${data.PlayerName}: ₦${data.Score}`;
   });
   */