function updateClock() {
  var now = new Date();
  var seconds = now.getSeconds();
  var minutes = now.getMinutes();
  var hours = now.getHours();

  var secondsAngle = seconds * 6; // Полный круг 360 градусов, 60 секунд
  var minutesAngle = minutes * 6 + seconds * 0.1; // Добавляем плавность
  var hoursAngle = (hours % 12) * 30 + minutes * 0.5; // 12 часов, 30 градусов на час

  var hourHand = document.querySelector('.hour-hand');
  var minuteHand = document.querySelector('.minute-hand');
  var secondHand = document.querySelector('.second-hand');

  hourHand.style.transform = `rotate(${hoursAngle}deg)`;
  minuteHand.style.transform = `rotate(${minutesAngle}deg)`;
  secondHand.style.transform = `rotate(${secondsAngle}deg)`;
}

setInterval(updateClock, 1000);
updateClock();
