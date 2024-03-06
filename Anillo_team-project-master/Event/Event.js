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

document.addEventListener("DOMContentLoaded", function () {
  const pages = document.querySelectorAll(".page");
  const buttons = document.querySelectorAll(".page-button");

  buttons.forEach((button) => {
    button.addEventListener("click", function () {
      const pageNumber = this.dataset.page;
      showPage(pageNumber);
    });
  });

  function showPage(pageNumber) {
    pages.forEach((page) => {
      page.style.display = "none";
    });

    const selectedPage = document.querySelector(`#page${pageNumber}`);
    if (selectedPage) {
      selectedPage.style.display = "block";
    }
  }
});
