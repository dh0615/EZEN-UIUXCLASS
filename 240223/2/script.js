// const btn = document.querySelector("#btn");
// const nav = document.querySelectorAll("#nav");

// btn.addEventListener = () => {
//   btn.classList.add(".clicked");
// };
// nav.addEventListener = () => {
//   nav.classList.add(".show");
// };

// ----------------하.. 해설

const btn = document.querySelector("#btn");
console.log(btn);
const nav = document.querySelector("#nav");

btn.addEventListener("click", () => {
  btn.classList.toggle("active");
  nav.classList.toggle("active");
});
