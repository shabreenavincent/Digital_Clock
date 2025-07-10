let is24Hour = false;

function updateClock() {
  const now = new Date();

  let hours = now.getHours();
  const minutes = now.getMinutes();
  const seconds = now.getSeconds();

  let ampm = 'AM';
  if (!is24Hour) {
    if (hours >= 12) {
      ampm = 'PM';
      hours = hours > 12 ? hours - 12 : hours;
    }
    hours = hours === 0 ? 12 : hours;
  }

  const formattedTime = [
    hours.toString().padStart(2, "0"),
    minutes.toString().padStart(2, "0"),
    seconds.toString().padStart(2, "0")
  ].join(":");

  document.getElementById("clock").innerHTML = `${formattedTime} ${
    is24Hour ? "" : `<span id="ampm">${ampm}</span>`
  }`;

  const options = { year: 'numeric', month: 'long', day: 'numeric' };
  const formattedDate = now.toLocaleDateString(undefined, options);
  document.getElementById("date").innerText = formattedDate;
}

function toggleFormat() {
  is24Hour = !is24Hour;
  updateClock();
}

// Initial and interval update
updateClock();
setInterval(updateClock, 1000);
