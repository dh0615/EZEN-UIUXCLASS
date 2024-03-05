const goingBtn = document.querySelectorAll(".goingbtn");
const endBtn = document.querySelectorAll(".endbtn");
const eventGoing = document.querySelector("#event_going");
const eventEnd = document.querySelector("#event_end");

for (let i = 0; i < goingBtn.length; i++) {
  goingBtn[i].addEventListener("click", () => {
    eventGoing.style.display = "block";
    eventEnd.style.display = "none";
  });
}

for (let i = 0; i < endBtn.length; i++) {
  endBtn[i].addEventListener("click", () => {
    eventGoing.style.display = "none";
    eventEnd.style.display = "block";
  });
}
