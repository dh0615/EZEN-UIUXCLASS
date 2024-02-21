// const desc = document.querySelector("#detail");
// const btn = document.querySelector("#view");

// btn.onclick = () => {
//   desc.classList.toggle("clicked");
// };

const viewBtn = document.querySelector("#view");
const detail = document.querySelector("#detail");
console.log(detail);

viewBtn.onclick = function () {
  detail.classList.toggle("hidden");
};
