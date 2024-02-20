// const contents = document.querySelectorAll("#contents");
// const btn = document.querySelector("button");

// btn.onclick = () => {
//   if (!contents.classList.contains("clicked")) {
//     contents.classList.add("clicked");
//   }
// };
const body = document.querySelector("body");
const button = document.querySelector("#toggle-box button");

// button.onclick = () => {
//   body.classList.toggle("dark");
// };

button.onclick = () => {
  if (!body.classList.contains("dark")) {
    body.classList.add("dark");
    button.innerText = "라이트모드로 바꾸기";
  } else {
    body.classList.remove("dark");
    button.innerText = "다크모드로 바꾸기";
  }
};
