// Grabbing the seconds, minute, hour hand from html
const secondHand = document.querySelector(".second-hand");
const minuteHand = document.querySelector(".min-hand");
const hourHand = document.querySelector(".hour-hand");

function setDate() {
  const now = new Date();
  // get seconds, minutes, hours
  // Turn seconds, minutes, hours into degrees, +90 is to offset the 90 degrees from the transform: rotate(90deg); in css
  // rotates secndHand, minuteHand, hourHand according to secondsDegrees

  // seconds
  const seconds = now.getSeconds();
  const secondsDegrees = (seconds / 60) * 360 + 90;
  secondHand.style.transform = `rotate(${secondsDegrees}deg)`;

  // minutes
  const mins = now.getMinutes();
  const minutesDegrees = (mins / 60) * 360 + 90;
  minuteHand.style.transform = `rotate(${minutesDegrees}deg)`;

  // hours
  const hours = now.getHours();
  const hoursDegrees = (hours / 12) * 360 + 90;
  hourHand.style.transform = `rotate(${hoursDegrees}deg)`;
}

// Time in miliseconds
setInterval(setDate, 1000);
