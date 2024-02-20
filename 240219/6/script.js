const bodyTag = document.querySelector("#theBody");
const btn = document.querySelector("button");

const colors = ["yellow", "aqua", "purple", "crimson"];
// 배열 안 값은 index가지고 있으며 index는 0부터 시작한다
let i = 0;
const changeColor = () => {
  i++;
  if (i >= colors.length) {
    /* 전체 배열안의 총 개수 // 그냥 4를 넣으면 추가되거나 빠질 때마다 수정해야함*/
    i = 0;
  }
  bodyTag.style.backgroundColor = colors[i];
};

btn.addEventListener("click", changeColor);
