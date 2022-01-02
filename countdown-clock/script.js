function getTimeRemaining(endtime) {
  const total = Date.parse(endtime) - Date.parse(new Date());
  const seconds = Math.floor((total / 1000) % 60);
  const minutes = Math.floor((total / 1000 / 60) % 60);
  const hours = Math.floor((total / (1000 * 60 * 60)) % 24);
  const days = Math.floor(total / (1000 * 60 * 60 * 24));
  
  return {
    total,
    days,
    hours,
    minutes,
    seconds
  };
}

function initializeClock(id, endtime) {
  const daysSpan = document.getElementById('days');
  const hoursSpan = document.getElementById('hours');
  const minutesSpan = document.getElementById('minutes');
  const secondsSpan = document.getElementById('seconds');

  function updateClock() {
    const t = getTimeRemaining(endtime);
console.log(t);
    

    if (t.total <= 0) {
      clearInterval(timeinterval);
      daysSpan.innerHTML = '00';
    hoursSpan.innerHTML = '00';
    minutesSpan.innerHTML = '00';
    secondsSpan.innerHTML = '00';
    } else {
      daysSpan.innerHTML = t.days;
    hoursSpan.innerHTML = ('0' + t.hours).slice(-2);
    minutesSpan.innerHTML = ('0' + t.minutes).slice(-2);
    secondsSpan.innerHTML = ('0' + t.seconds).slice(-2);
    }
  }

  updateClock();
  const timeinterval = setInterval(updateClock, 1000);
}

const deadline = 'December 31 2022 20:43:40 GMT+0200';
initializeClock('clock', deadline);