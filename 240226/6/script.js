const today = new Date();
const displayDate = document.querySelector("#today");
const year = today.getFullYear();
const month = today.getMonth() + 1;
const date = today.getDate();
const day1 = today.getDay();

let day2 = "";

switch (day1) {
  case 0:
    day2 = "일요일";
    break;
  case 1:
    day2 = "월요일";
    break;
  case 2:
    day2 = "화요일";
    break;
  case 3:
    day2 = "수요일";
    break;
  case 4:
    day2 = "목요일";
    break;
  case 5:
    day2 = "금요일";
    break;
  case 6:
    day2 = "토요일";
    break;
}

displayDate.innerHTML = `📆 ${year}년 ${month}월 ${date}일 <span style="font-weight:bold">${day2}</span>`;

const displayTime = document.querySelector("#clock");

const clock = () => {
  let current = new Date();
  let hrs = current.getHours();
  let mins = current.getMinutes();
  let secs = current.getSeconds();

  let period = "AM";
  if (hrs === 0) {
    hrs = 12;
  } else if (hrs > 12) {
    hrs = hrs - 12;
    period = "PM";
  }

  hrs = hrs < 10 ? "0" + hrs : hrs;
  mins = mins < 10 ? "0" + mins : mins;
  secs = secs < 10 ? "0" + secs : secs;

  displayTime.innerText = `⏰ ${period} ${hrs} : ${mins} : ${secs}`;
};

setInterval(clock, 1000);
