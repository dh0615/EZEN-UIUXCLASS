// open, close 버튼 인식시켜주기
// open버튼에 가상클래스주면 모달이 열리고 open버튼은 사라지게 해주기

// const openBtn = document.querySelector(".open");
// const closeBtn = document.querySelector(".close");
// const container = document.querySelectorAll(".container");

// openBtn.onclick = () => {
//   container.classList.toggle("clicked");
// };

// 해설..
// open버튼에 대한 정의
// close 버튼에 대한 정의
// 출력되어야할 모달 페이지 정의

const openBtn = document.querySelector(".open");
const closeBtn = document.querySelector(".close");
const container = document.querySelector(".container");

const openFnc = () => {
  openBtn.style.display = "none";
  container.style.display = "flex";
};
const closeFnc = () => {
  container.style.display = "none";
  openBtn.style.display = "block";
};

openBtn.onclick = openFnc;
closeBtn.onclick = closeFnc;
