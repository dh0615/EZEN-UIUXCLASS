const toggle = document.querySelector(".toggle");
const gnb = document.querySelector("#gnb");

toggle.addEventListener("click", () => {
  gnb.classList.toggle("active");
  toggle.classList.toggle("active");
});
