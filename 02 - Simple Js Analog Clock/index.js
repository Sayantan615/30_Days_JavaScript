function setDate() {
  const currDate = new Date();
  const seconds = currDate.getSeconds();
  const secondDeg = (seconds / 60) * 360 + 90;
  //adding 90deg because we set the initial poition to 90deg. so by adding 90 deg we are making it even.
  const secondHand = document.querySelector(".second-hand"); //only selects a single item from document
  secondHand.style.transform = `rotate(${secondDeg}deg)`;

  const mintues = currDate.getMinutes();
  const mintuesDeg = (mintues / 60) * 360 + 90;
  const mintuesHand = document.querySelector(".min-hand");
  mintuesHand.style.transform = `rotate(${mintuesDeg}deg)`;

  const houres = currDate.getHours();
  const houresDeg = (houres / 12) * 360 + 90;
  const houresHand = document.querySelector(".hour-hand");
  houresHand.style.transform = `rotate(${houresDeg}deg)`;
  console.log(houres);
}

setInterval(setDate, 1000);
