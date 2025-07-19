//To build a stopwatch web application, you can use HTML, CSS, and JavaScript. HTML is used to structure the elements of the application. By implementing functions for starting, pausing, and resetting the stopwatch, as well as tracking and displaying the lap times, users can accurately measure and record time intervals. With these technologies and functionalities, you can create an interactive and user friendly stopwatch web application.

let body = document.querySelector("body");
let minute = document.querySelector(".minute");
let second = document.querySelector(".second");
let milliSecond = document.querySelector(".millisecond");
let logTable = document.querySelector(".log-table");
let logData = document.createElement('p');

let start = document.querySelector(".startBtn");
let pause = document.querySelector(".pauseBtn");
let log = document.querySelector(".log");
let reset = document.querySelector(".resetBtn");

let min = 0;
let sec = 0;
let ms = 0;
let interval = null;
let count = 0;

function stopwatch() {
  if (interval !== null) {
    clearInterval(interval);
  }
  interval = setInterval(function () {
    ms++;
    if (ms === 100) {
      ms = 0;
      sec++;
      if (sec === 60) {
        sec = 0;
        min++;
        minute.innerText = min;
      }
      second.innerText = sec;
    }
    milliSecond.innerText = ms;
  }, 10);
}


start.addEventListener("click", stopwatch);
pause.addEventListener("click", function () {
  if (interval !== null) {
    clearInterval(interval);
    interval = null;
  }
});
reset.addEventListener("click", function () {
  min = 0;
  minute.innerText = min;
  sec = 0;
  second.innerText = sec;
  ms = 0;
  milliSecond.innerText = ms;
  count = 0;
});
log.addEventListener("click", function () {
  count++;
  time = (`${count}     -     ${min}:${sec}:${ms}`);
  let logData = document.createElement("p");
  logData.innerText = time;
  logTable.appendChild(logData);
});
