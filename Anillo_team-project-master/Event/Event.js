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

/* function showPage(pageNumber) {
  const pages = document.querySelectorAll(".page");
  pages.forEach((page) => {
    page.style.display = "none";
  });

  const selectedPage = document.querySelector(`#page${pageNumber}`);
  if (selectedPage) {
    selectedPage.style.display = "block";
  }
}

function updateButtonStyle(selectedButton) {
  const buttons = document.querySelectorAll(".page-button");
  buttons.forEach((button) => {
    button.classList.remove("active");
  });

  selectedButton.classList.add("active");
}

const buttons = document.querySelectorAll(".page-button");
buttons.forEach((button) => {
  button.addEventListener("click", (e) => {
    const clickedButton = e.target;
    const pageNumber = clickedButton.textContent;
    showPage(pageNumber);
    updateButtonStyle(clickedButton);
  });
});
 */
const buttons = document.querySelectorAll(".page-button");
buttons.forEach((button) => {
  button.addEventListener("click", (e) => {
    const clickedButton = e.target;
    const pageNumber = clickedButton.innerText;
    pageOn(pageNumber);

    if (clickedButton) {
      button.classList.add("active");
      if (pageSelected) {
        button.classList.remove("active");
      }
    }
  });
});

const pageOn = (pageNumber) => {
  const pages = document.querySelectorAll(".page");
  pages.forEach((page) => {
    page.style.display = "none";
  });
  const pageSelected = document.querySelector(`#page${pageNumber}`);
  if (pageSelected) {
    pageSelected.style.display = "block";
  }
};

const arrows = document.querySelector(".arrow");
arrows.forEach((arrow) => {
  arrow.addEventListener("click", (e) => {
    let i = 0;
    if (e.target.id === prev) {
      i--;
      if (i < 0) {
        i = pages.length - 1;
      }
    } else if (e.target.id === next) {
      i++;
      if (i > pages.length) {
        i = 0;
      }
    }
  });
});
