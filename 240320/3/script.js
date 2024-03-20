const imageAll = document.querySelectorAll(".imageWrap .parallaxImage");
const totalNum = imageAll.length;
const subPageImage = document.querySelector(".subPage .parallaxImage");

let scrollNum = 0;

let x = 0;
let targetX = 0;
const speed = 0.1;
// 부드럽게 움직이는 window.requestAnimationFrame를 주기 위해서는 이 3가지 조건을 줘야함

window.addEventListener("scroll", () => {
  scrollNum = window.scrollY;
  imageAll.forEach((item, index) => {
    if (index < 4) {
      item.style.transform = `translateY(${
        -scrollNum / (5 * (totalNum - index))
      }px)`;
    }
  });
});

window.addEventListener("mousemove", (e) => {
  x = e.pageX - window.innerWidth / 2;
  // pageX만 주면 왼쪽이 기준이니까 이미지의 가운데를 기준으로 하기 위해 window.innerWidth / 2 줌
});

const loop = () => {
  targetX += (x - targetX) * speed;
  imageAll[4].style.transform = `scale(1.5) translate(${-targetX / 50}px, ${
    -scrollNum / (5 * (totalNum - 4))
  }px)`;
  imageAll[5].style.transform = `scale(1.2) translate(${-targetX / 20}px, ${
    -scrollNum / (5 * (totalNum - 5))
  }px)`;
  window.requestAnimationFrame(loop);
};
loop();
