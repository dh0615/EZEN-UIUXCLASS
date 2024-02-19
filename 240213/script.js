// const button = document.querySelector("button");
// button.addEventListener("click", () => {
//   // alert("오늘도 화이팅입니다..");
//   // confirm("안녕하세요..");
//   // prompt("당신의 이름을 입력해주세요");
//   window.prompt("당신의 이름을 입력해주세요");
// });

// const name = "이다현ㅎㅎ..";
// window.document.write("제 이름은 " + name + "입니다");
/* 이 경우에는 html파일에서 defer 속성을 지워야함 ,, 언제 defer쓰고 언제 안쓰는지 알아야함 */

// var num; // 선언
// num = 7; // 할당

/* var num = 7; */ // 선언과 동시에 할당 > 효율적 ~.~
// 실무에서는 var라는 변수는 거의 사용하지 않는 키워드 !!
/* document.write(num); */

// JS에서 사용가능한 변수 선언 키워드
// 1. const
// 2. let
// 3. var(2015년 이전) = variable = 변수 = 유연함 > flexable

// DOMContentLoaded >> html에서 defer쓰지 않아도 실행 가능하지만 보통은 많이 사용하지 않음
// window.addEventListener("DOMContentLoaded", function () {
//   const button = document.querySelector("button");
//   button.addEventListener("click", () => {
//     // alert("오늘도 화이팅입니다..");
//     const userName = this.prompt("당신의 이름을 입력해주세요");
//     console.log(userName);
//     document.write(userName);
//   });
// });

/* === var === */
// 웹 & 앱 작업 : 혼자서 독립작업x || 여러사람이 협업!!
// 재할당 , 재선언

// a = num 선언 & 할당
/* var num = 7; */

// b = num 재선언 & 재할당
/* var num = 10; */

// c = num 재선언 & 재할당
/* var num = 14; */
// 마지막 선언 데이터만 작동하기 때문에 var는 너무 유연하다고 볼 수 있다
// 프로그래밍 언어가 지나치게 유연 = 리스크가 많다
// 엄격할 수록 리스크가 적어진다

/* === const === */
// const로 선언하자 >> const = 재할당, 재선언이 일체 불가

// a = 변수 선언 & 할당
/* const str = "Hello World!"; */

// b = 변수 재선언 & 재할당
/* const str = "Hello Today!"; */
// str이라는 변수를 다시 재선언할 수 없다고 경고 뜸
/* str = "Hello Today!"; */ // 재선언 안되는거 알고 재할당
// console.log(str); 해보면 콘솔창에서 오류 뜸

// const : 재선언 & 재할당 원천적으로 불가능한 변수를 선언하고자 할 때
// const키워드로 변수를 선언하게되면, const 안에 담긴 값을 상수(고정값)라고 부름 (변수 <-> 상수)

/* === let === */
// let : 원칙적으로 재선언은 불가하지만, 재할당은 가능

/* let str01 = "Life is good..★"; */

// let str01 = "Today is perfect"; // str01이라는 변수를 다시 재선언할 수 없다고 경고 뜸

/* str01 = "Today is perfect";  */
// let = 재선언은 안되지만 재할당은 가능하기 때문에 const와 달리 이거는 작동함
/* console.log(str01); */

// JS에서 변수로 선언할 수 있는 3가지
// var / let / const >> 셋의 차이 알 것
// 재선언 재할당이 뭐가 가능하고 뭐가 불가능한지

// const str = "test";
// console.log(str);

/* 객체 */
// const data = 5;
// const str = "hello";
// const boolean = true;

// const title = "최재천의 곤충사회";
// const price = 16200;
// const delivery = "free";
// const author = "최재천";
// const publishingDate = "2024-02-10";
// // 이런 내용을 하나하나 쓸수는 없으니 객체가 필요한 것
// const newBook = {
//   title: "최재천의 곤충사회",
//   price: 16200,
//   delivery: "free",
//   author: "최재천",
//   cancel: 10000,
//   publishingDate: "2024-02-10",
// };

// /* 배열 */
// const arr = [1, 2, 3, 4, 5];
// const newBook01 = [
//   "최재천의 곤충사회",
//   16200,
//   "free",
//   "최재천",
//   "2024-02-10",
//   10000,
// ];
// 단순히 배열만 놓고 보면 쓴 사람만 기준을 알고 다른 사람은 유추하기 어려움
// 반복적으로 무언가를 실행시키고자 할 때는 배열이 객체보다 훨씬 효율적이라는 장접이 있음

// const result = prompt("당신의 나이를 입력하세요");
/* const result = prompt("당신의 나이를 입력하세요"); */
/* console.log(typeof result); */
// 뒤에 붙은 변수가 어떠한 타입인지를 알려준다
// 변수 안에 들어가 있는 자료형의 type을 알려준다
// console.log("당신은 10년 뒤 " + result + 10 + "세 입니다");
// 문자와 숫자가 혼합되어있으면 문자로 봐서 당신은 10년 뒤 2010세입니다 이렇게 나옴 ㅠ

/* const tenYear = result + 10; */
// tenYear 는 숫자가 됨
// console.log("당신의 10년 뒤 나이는" + tenYear + "세 입니다");
/* console.log(`당신의 10년 뒤 나이는 ${tenYear}세 입니다`); */

// const num = "10";
// ""안 = 문자
// console.log(typeof num);

// const result = confirm("오늘도 점심 드실거죠?");
// if (result === true) {
//   alert("맛있게 드세요!");
// } else {
//   alert("왜요?");
// }
// console.log(result);

// const result = prompt("당신의 나이를 입력하세요");
// console.log(result);

const newBook = {
  title: "최재천의 곤충사회",
  price: 16200,
  delivery: "free",
  author: "최재천",
  cancel: 10000,
  publishingDate: "2024-02-10",
};
// 객체는 기본적으로 {key: value}로 구성되어있음 => 프로퍼티 (property)
console.log(newBook.title);
const bookTitle = newBook.title;
document.write(bookTitle);
