// Set the date we're counting down to
var countDownDate = new Date("Jul 8, 2023 13:00:00").getTime();

// Update the count down every 1 second
var x = setInterval(function () {
  // Get today's date and time
  var now = new Date().getTime();

  // Find the distance between now and the count down date
  var distance = countDownDate - now;

  // Time calculations for days, hours, minutes and seconds
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  let secondsBack;
  if (seconds === 0) {
    secondsBack = seconds + 59;
  } else {
    secondsBack = seconds - 1;
  }
  let minutesBack;
  if (minutes === 0) {
    minutesBack = minutes + 59;
  } else {
    minutesBack = minutes - 1;
  }
  let hoursBack;
  if (hours === 0) {
    hoursBack = hours + 23;
  } else {
    hoursBack = hours - 1;
  }
  let daysBack;
  if (days === 0) {
    daysBack = 0;
  } else {
    daysBack = days - 1;
  }

  // Display the result in the element with id="demo"
  document.getElementById("days1").innerText = days;
  document.getElementById("days2").innerText = daysBack;
  document.getElementById("days3").innerText = days;
  document.getElementById("days4").innerText = days;
  document.getElementById("hours1").innerText = hours;
  document.getElementById("hours2").innerText = hoursBack;
  document.getElementById("hours3").innerText = hours;
  document.getElementById("hours4").innerText = hours;
  document.getElementById("minutes1").innerText = minutes;
  document.getElementById("minutes2").innerText = minutesBack;
  document.getElementById("minutes3").innerText = minutes;
  document.getElementById("minutes4").innerText = minutes;
  document.getElementById("seconds1").innerText = seconds;
  document.getElementById("seconds2").innerText = secondsBack;
  document.getElementById("seconds3").innerText = secondsBack;
  document.getElementById("seconds4").innerText = seconds;

  if (distance > 0) {
    document.getElementById("days-top").classList.remove("flipit1");
    document.getElementById("days-bottom").classList.remove("flipit2");
    document.getElementById("hours-top").classList.remove("flipit1");
    document.getElementById("hours-bottom").classList.remove("flipit2");
    document.getElementById("minutes-top").classList.remove("flipit1");
    document.getElementById("minutes-bottom").classList.remove("flipit2");
    document.getElementById("seconds-top").classList.add("flipit1");
    document.getElementById("seconds-bottom").classList.add("flipit2");
    if (seconds === 0) {
      document.getElementById("minutes3").innerText = minutesBack;
      document.getElementById("minutes-top").classList.add("flipit1");
      document.getElementById("minutes-bottom").classList.add("flipit2");
      if (minutes === 0) {
        document.getElementById("hours3").innerText = hoursBack;
        document.getElementById("hours-top").classList.add("flipit1");
        document.getElementById("hours-bottom").classList.add("flipit2");
        if (hours === 0) {
          document.getElementById("days3").innerText = daysBack;
          document.getElementById("days-top").classList.add("flipit1");
          document.getElementById("days-bottom").classList.add("flipit2");
        }
      }
    }
  } else if (distance < 0) {
    clearInterval(x);
    document.getElementById("zero").innerText = "ARE MARRIED!!";
  }
}, 1000);

document.getElementById("hours1").classList.remove("flipit");
document.getElementById("days1").classList.remove("flipit");
