// 외부 스크립트 : 이벤트 핸들러
// const button = document.querySelector("button");

// button.onclick = () => {
//   document.body.style.backgroundColor = "pink";
// };

// 외부 스크립트 : 이벤트 리스너
const button = document.querySelector("button");

button.addEventListener("click", () => {
  document.body.style.backgroundColor = "darkblue";
});

/* 매개변수를 기본값으로 2개 받음
1. 어떤 이벤트가 발생되었는지
2. 그렇다면 다음과 같은 함수를 실행시켜줘라 */
