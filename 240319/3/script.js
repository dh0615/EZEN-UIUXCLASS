const contentAll = document.querySelectorAll(".contentWrap img");

// const shadow = contentAll[0];
// const date = contentAll[1];
// const human = contentAll[2];
// const textImg = contentAll[3]; 이렇게 쓰지 말고 구조분해 할당

const [shadow, date, human, textImg] = contentAll;

let x = 0;
let targetX = 0;
const speed = 0.1;

window.addEventListener("mousemove", (e) => {
  x = e.pageX - window.innerWidth / 2;
}); // 너비값을 절반만 쓰기 위한 목적

const loop = () => {
  targetX += (x - targetX) * speed;

  shadow.style.transform = `translateX(${targetX / 35}px)`;
  date.style.transform = `translateX(${targetX / 20}px)`;
  human.style.transform = `translateX(${-targetX / 20}px)`;
  textImg.style.transform = `translateX(${-targetX / 20}px)`;
  // x가 아닌 targetX를 나눠줌으로써 좀더 자연스럽게 움직이도록 해줌

  window.requestAnimationFrame(loop);
};
loop();
