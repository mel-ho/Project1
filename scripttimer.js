class Timer {
  constructor({
    seconds = 0,
    minutes = 0,
    timerSeconds = 0,
    timerMinutes = 0,
    interval = null,
    counter = false,
  }) {
    this.seconds = seconds;
    this.minutes = minutes;
    this.timerSeconds = timerSeconds;
    this.timerMinutes = timerMinutes;
    this.interval = interval;
    this.counter = counter;
  }

  runTimer() {
    this.seconds++;

    if (this.seconds / 60 === 1) {
      this.seconds = 0;
      this.minutes++;
    }

    if (this.seconds < 10) {
      this.timerSeconds = "0" + this.seconds.toString();
    } else {
      this.timerSeconds = this.seconds;
    }
    document.getElementById("timer").innerHTML =
      this.timerMinutes + ":" + this.timerSeconds;
  }

  startTimer() {
    if (this.counter === false) {
      this.interval = window.setInterval(() => this.runTimer(), 1000);
      document.getElementById("startTimer").innerHTML = "Stop";
      this.counter = true;
    } else {
      window.clearInterval(this.interval);
      document.getElementById("startTimer").innerHTML = "Start";
      this.counter = false;
    }
  }

  resetTimer() {
    widown.clearInterval(this.interval);
    this.seconds = 0;
    this.minutes = 0;
    document.getElementById("timer").innterHTML = "0:00";
    document.getElementById("startTimer").innerHTML = "START";
  }
}

// start game
const timer = new Timer({});
