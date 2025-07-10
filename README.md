# Digital_Clock
## Date:
## Objective:
To create a live digital clock using HTML, CSS, and JavaScript that updates every second and displays the current time in HH:MM:SS format — a feature commonly used in dashboards and admin panels.

## Tasks:

#### 1. Create the HTML Structure:
Use a ```<div>``` with an ID like clock to hold the time display.

Add a page title like ```<h1>TimeTrack</h1>```.

Optionally, include a subtitle like “Live Digital Clock”.

#### 2. Style the Clock with CSS:
Center the clock using flexbox or text-align: center.

Use a large font size (e.g., font-size: 48px) for the clock display.

Style with a dark background and light-colored text for contrast.

Use padding, border-radius, and box-shadow for a modern look.

#### 3. Add JavaScript Functionality:
Create a function that gets the current time using new Date().

Extract hours, minutes, and seconds from the date object.

Format them to two digits using .padStart(2, "0").

Update the inner text of the clock div every second using setInterval().

#### 4. Enhancements:
Display AM/PM next to the time.

Add the current date below the time.

Let the user choose between 12-hour and 24-hour formats.

Animate the colon (:) blinking every second.

Add a “Tweet this” button with a share link.
## HTML Code:
```
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
  <title>TimeTrack - Live Clock</title>
  <link rel="stylesheet" href="style.css">
</head>
<body>
  <div class="container">
    <h1>TimeTrack</h1>
    <p class="subtitle">Live Digital Clock</p>
    <div id="clock">00:00:00 <span id="ampm">AM</span></div>
    <div id="date">January 1, 2025</div>
    <button onclick="toggleFormat()">Toggle 12/24 Hr</button>
  </div>

  <script src="script.js"></script>
</body>
</html>
```
## CSS Code:
```
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body, html {
  height: 100%;
  background-color: #111;
  color: #fff;
  font-family: 'Segoe UI', sans-serif;
  display: flex;
  justify-content: center;
  align-items: center;
}

.container {
  text-align: center;
  padding: 40px;
  border-radius: 12px;
  background-color: #222;
  box-shadow: 0 0 20px rgba(0,0,0,0.6);
}

h1 {
  font-size: 36px;
  margin-bottom: 10px;
}

.subtitle {
  font-size: 18px;
  color: #ccc;
  margin-bottom: 30px;
}

#clock {
  font-size: 60px;
  letter-spacing: 2px;
  margin-bottom: 10px;
  position: relative;
}

#clock span {
  font-size: 20px;
  vertical-align: top;
  margin-left: 8px;
  color: #0f0;
}

#date {
  font-size: 20px;
  color: #aaa;
  margin-bottom: 20px;
}

button {
  background-color: #0f62fe;
  color: white;
  padding: 10px 20px;
  font-size: 16px;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

button:hover {
  background-color: #0353e9;
}
```
## js code:
```
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

updateClock();
setInterval(updateClock, 1000);
```
## Output:
<img width="1920" height="1080" alt="image" src="https://github.com/user-attachments/assets/a6953a86-09bc-4d8c-83a7-fe7d39699c1c" />

## Result:
A live digital clock using HTML, CSS, and JavaScript that updates every second and displays the current time in HH:MM:SS format — a feature commonly used in dashboards and admin panels is created successfully.
