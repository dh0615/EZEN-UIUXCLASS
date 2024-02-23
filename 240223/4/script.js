// h2, 버튼, 주문 영역 인식시켜주기
// 버튼을 클릭하면 h2가 orderInfo 공간에 나타나게 해주기..

// const title = document.querySelector("#container h2");
// const btn = document.querySelector("#order");
// const result = document.querySelector("#orderInfo");

// btn.addEventListener = ("click", () => {
//   result.innerText =
// })

// 하.. 해설..

const orderButton = document.querySelector("#order");
const title = document.querySelector("#container h2");
const orderInfo = document.querySelector("#orderInfo");

orderButton.addEventListener(
  "click",
  () => {
    const newP = document.createElement("p");
    const textNode = document.createTextNode(title.innerText);
    newP.appendChild(textNode);
    newP.style.color = "plum";
    newP.style.fontSize = "1.2rem";
    orderInfo.appendChild(newP);
  },
  {
    once: true,
    /* 동일한 정보에 한해서 여러번 클릭해도 값이 계속 추가되지 않도록 막아줌 */
  }
);
