const buttons = document.querySelectorAll("label");
const tabItems = document.querySelector(".tabs .items");
const h1 = tabItems.querySelectorAll("h1");

buttons.forEach((button, index) => {
  button.addEventListener("click", () => {
    tabItems.style.left = `-${index * 100}%`;

    buttons.forEach((button) => button.classList.remove("active"));
    /* 먼저 클래스 특성들을 제거해줘야 함 */
    button.classList.add("active");

    h1.forEach((title) => title.classList.remove("active"));
    h1[index].classList.add("active");
  });
});
