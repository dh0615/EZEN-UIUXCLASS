const result = document.querySelector("#result");

// document.body.onkeydown = (event) => {
//   result.innerText = event.key;
// };

document.body.onkeydown = (event) => {
  result.innerText = `
   code : ${event.code},
   key : ${event.key}
  `;
};

/* code : 키보드의 어떤 키인지
key : 실제 값 */
