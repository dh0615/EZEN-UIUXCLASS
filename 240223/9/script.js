// x버튼 인식시켜주기
// products 인식시켜주기
//for(let product of products) ..?
// x누르면 사라지게 해주기

// const btn = document.querySelector("#products span");
// const products = document.querySelectorAll("#products p");
// /* console.log(products); */

// for (let product of products) {
//   product.addEventListener("click", function () {
//     this.parentNode.removeChild(this);
//   });
// }

// --------------------해설 ..
const buttons = document.querySelectorAll("p span");

for (let button of buttons) {
  button.addEventListener("click", function () {
    this.parentNode.remove();
  });
}
/* 부모요소를 없애면 버튼과 텍스트를 다 없앨 수 있으므로 이번에는 굳이 removechild가 아니라 remove를 써도 됨 */
