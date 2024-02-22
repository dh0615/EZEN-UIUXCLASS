// window.onload = alert("안녕하세요 👽 ");

/*const body = document.querySelector("body");
const button = document.querySelector("button");

 button.onclick // 속성 
button.alert() // method */

/* button.onclick = () => {
  body.style.backgroundColor = "green";
}; 을 refactoring하면 아래처럼 쓸 수 있음
 */

const button = document.querySelector("button");

/*const btnFnc = () => {
  window.document.body.style.backgroundColor = "green";
}; body는 내장함수라서 굳이 따로 변수를 주고 불러오지 않아도 작동함 */

const btnFnc = () => {
  document.body.style.backgroundColor = "green";
};
/* window 생략가능.. */

button.onclick = btnFnc;
