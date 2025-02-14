
let bulletPriceDisplay = document.getElementById("bulletPriceDisplay");
const bulletPrice = 10;
bulletPriceDisplay.innerHTML = "Bullet price: ₦" + bulletPrice + "/bullet.";
let firingRateDisplay = document.getElementById("firingrate");
let interval;


function shooting() {

 if (firingRate <= 19) {
  firingRate++;
  firingRateDisplay.innerHTML = "Firing rate: " + firingRate;
  firing.innerHTML = "Firing:" + ("🔥".repeat(firingRate));
  clearInterval(interval);
  interval = setInterval(decrement, 100);
 } else if (firingRate >= 19 && firingRate <= 21) {
  firingRate++;
  firingRateDisplay.style.color = "orange";
  firingRateDisplay.innerHTML = "Firing rate: " + firingRate + " Warning of overheating";
  clearInterval(interval);
  interval = setInterval(decrement, 85);
 } else if (firingRate > 21) {
  firingRate++;
  firingRateDisplay.style.color = "red";
  firing.innerHTML = "Firing: Gun overheating!";
  firingRateDisplay.innerHTML = "Firing rate: Gun overheating!";
  clearInterval(interval);
  interval = setInterval(decrement, 90);
 }
}

function decrement() {

 firingRateDisplay.innerHTML = "Firing rate: " + firingRate;
 if (firingRate > 0 && firingRate <= 21) {
  firingRate--; // -= firingRate;
  firing.innerHTML = "Firing:" + ("🔥".repeat(firingRate));

 } else if (firingRate > 21) {
  firingRate--; // -= firingRate;  
  firing.style.color = "red";
 } else {
  clearInterval(interval);

 }
}
trigger.addEventListener("click", shooting);