const arrows = document.querySelectorAll(".arrow");
const container = document.querySelector("#container");
let i = 0; /* 무조건 웹브라우저를 새로고침하면 0을 인덱스로 가진게 나오게끔 */
/* i는 계속 재할당해줘야하니까(아래 i--, i++..) let으로 설정 */
const pics = [
  "pic-1.jpg",
  "pic-2.jpg",
  "pic-3.jpg",
  "pic-4.jpg",
  "pic-5.jpg",
  "pic-6.jpg",
];

container.style.backgroundImage = `url(./images/${pics[0]})`;

arrows.forEach((arrow) => {
  arrow.addEventListener("click", (e) => {
    if (e.target.id === "left") {
      i--;
      if (i < 0) {
        i = pics.length - 1;
      } /* 첫번째 이미지에서는 왼쪽 누르면 마지막 이미지가 나오게  */
    } else if (e.target.id === "right") {
      i++;
      if (i >= pics.length) {
        i = 0; /* 첫번째 이미지로 다시 돌아가게 하기 위해서 */
      }
    }
    container.style.backgroundImage = `url(./images/${pics[i]})`;
  });
});
