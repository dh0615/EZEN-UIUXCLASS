const h1 = document.querySelector("h1");
const box = document.querySelector(".box");

// mouse 이동 시 최종 좌표값 = pageX, Y
let x = 0,
  y = 0;

// mouse 이동 전 좌표값
let targetX = 0,
  targetY = 0;

// mouse 이동 전,후 아이콘의 속도 비율
let speed = 0.03;

window.addEventListener("mousemove", (e) => {
  x = e.pageX;
  y = e.pageY;

  h1.innerText = `x : ${e.pageX}, y : ${e.pageY} `;
});

const loop = () => {
  targetX += (x - targetX) * speed;
  targetY += (y - targetY) * speed;

  box.style.top = targetY + "px";
  box.style.left = targetX + "px";

  window.requestAnimationFrame(loop);
  // 움직이고 있는 값을 자동으로 받아들이게 하기 위해서 재귀함수 써줌
};
loop();
