let balanceDisplay = document.getElementById("balanceDisplay");

let theMan = document.getElementById("theMan");

let player2 = "The Man";

function express() {
 if (firingRate >= 7 && firingRate <= 10) {
  expressions.innerHTML = input.value + ": That's it!!";
  theMan.innerHTML = player2 + ": Too early to jubilate, " + input.value + ". Shoot faster.";

 } else if (firingRate >= 11 &&
  firingRate <= 14) {

  expressions.innerHTML = input.value + ": I'm on fire!!";
  theMan.innerHTML = player2 + ": Good! But you can shoot faster, " + input.value + "!";

 } else if (firingRate >= 19 && firingRate <= 20) {
  expressions.innerHTML = input.value + ": Zagaaaaaaa!!";
  firingRateDisplay.style.color = "green";
  theMan.innerHTML = player2 + ": Fantastic! Maintain this rate.";
 } else if (firingRate === 21) {
  theMan.innerHTML = player2 + ": Careful or the gun will overheat!";

  expressions.innerHTML = input.value + ": Hmm!";
 } else if (firingRate > 21) {
  theMan.innerHTML = player2 + ": I warned you, " + input.value + "!";
  expressions.innerHTML = input.value + ": Oh, no!";
 }

}
trigger.addEventListener("click", express);
