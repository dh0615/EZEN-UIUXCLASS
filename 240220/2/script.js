// DOM에서 데이터를 찾아오는 방법 1. querySelector
/* const h1 = document.querySelector("h1");
const profile = document.querySelector("#profile");
const img = document.querySelector("#profile img");
const users = document.querySelectorAll(".user");
// 복수의 요소는 querySelectorAll
// 전개연산자 ... 으로 매개변수 받아올 때도 배열로 찾아오고 querySelectorAll로 받아올 때도 배열로 찾아온다 > for문 가능하다
const address = users[1]; 
// 이렇게 찾아올 수 있다

console.log(h1);
console.log(profile);
console.log(img);
console.log(users);
console.log(address); */

// DOM에서 데이터를 찾아오는 방법 2. getElementsBy~
/* const h1 = document.getElementsByTagName("h1");
const profile = document.getElementById("profile");
// Id값만 찾아오니까 #profile이렇게 안써도됨
const users = document.getElementsByClassName("user");

console.log(h1);
console.log(profile);
console.log(users); */

/* const desc = document.querySelector("#desc");
// desc.innerText = "이름 : 정재현";
// DOM에서 찾아온 속성에 값을 넣고 싶을 때 사용하는거 1. innerText */

/* const descName = desc.innerText;
console.log(descName);
// 단순히 글자 요소만 찾아옴

const descHtml = desc.innerHTML;
console.log(descHtml);
// 모든 html요소까지 다가져옴

const descContext = desc.textContent;
console.log(descContext);
// innerText vs textContent
// innerText : 웹브라우저에 출력되는 것만 보여줌
// textContent : 출력되지 않아도 보여줌
// 평상시에는 차이가 나지않으나 display:none같은 속성을 주었을 때 차이가 나타남 */

// 이벤트 핸들러 : 이벤트 작동 실행
// addEventListener
// on~~ (onclick..)
// const title = document.querySelector("h1");
// title.onclick = function () {
//   title.innerText = "마이 프로필";
// };
// title.onclick = () => (title.innerText = "마이 프로필");

// const userName = document.querySelector("#desc p");
// userName.onclick = () => (userName.innerHTML = "이름 : <b>재현이</b>");
// // innerHTML를 줬기 때문에 b태그 작성 가능한

// const pfImg = document.querySelector("#profile img");
// console.log(pfImg);

// pfImg.onclick = () => (pfImg.src = "./images/pf2.png");

// 자바스크립트에서 DOM요소의 스타일을 변경하는 방법
/* const title = document.querySelector("h1");
const userName = document.querySelectorAll(".user")[0];
console.log(userName);

title.onclick = () => {
  title.style.backgroundColor =
    "#000"; title은 전역스코프이기 때문에 함수 안에 또 써줄 수 있음
  title.style.color = "#fff";
}; */
// const classGroup = userName.classList;
// classList : 클래스 값을 찾아줌
// classList = 앞에 붙은 객체에 클래스 값이 있는지 없는지 확인

/* userName.onclick = () => {
  userName.classList.add("clicked");
  add() : 맨 앞에 붙은 객체에 클래스값이 없다면 클래스를 추가해달라는 뜻 
  clicked라는 클래스를 userName에 줌
}; */

/* clicked라는 가상 클래스가 적용되어있는지 아닌지 판단하는 역할 = contains (classList는 여기까지는 안함) */
// const clickedTrue = userName.classList.contains("clicked");
/* 객체안에 clicked라는 클래스가 있는지 확인하고 적용되어있다면 clickedTrue를 실행시켜라 */
// console.log(clickedTrue); > 클래스가 있는지 없는지에 따라 true와 false를 알려줌

// userName.onclick = () => {
//   if (!userName.classList.contains("clicked")) {
//     userName.classList.add("clicked");
//   } else {
//     userName.classList.remove("clicked");
//   }
// };
// clicked 라는 클래스가 없을 때 add를 해달라고 명령해야하니까 부정연산자 ! 사용

/* userName.onclick = () => {
  userName.classList.toggle("clicked");
}; */
// toggle 함수를 이용해서 add / remove / contains를 한번에 하게 해줌
