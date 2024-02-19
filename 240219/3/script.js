// 즉시실행함수
/* function sum(a, b) {
  const sum = a + b;
  console.log(`함수 실행결과값 : ${sum}`);
}
sum(1, 2); */

// 함수의 구현부와 실행부를 이원화 하지 않으려면??
// 1.
// (function sum(a, b) {
//   const sum = a + b;
//   console.log(`함수 실행결과값 : ${sum}`);
// })(1, 2);

// 2. 익명함수로 사용
// (function (a, b) {
//   const sum = a + b;
//   console.log(`함수 실행결과값 : ${sum}`);
// })(1, 2);

// ----------------------------
// 화살표함수 + @

// example();

/* const example = function () {
  console.log("hello");
}; 
구현과 선언이 되기 전에 실행문을 써서 오류가 남*/

/* function example() {
  console.log("hello");
} */
/* 이렇게 하면 실행문을 위에 써도 호출이 됨 >> 문제가 있다;; */

// const example = () => {
//   console.log("hello");
// };
/* 선언이 안되었을 때는 호출이 안되게 해야하므로 익명함수 또는 화살표 함수를 쓰자고 하는 것  */
// === Hoisting 기법
// 무언가를 끌어올리다
// class 함수는 hoisting이 가능한 반면 화살표 & 익명함수는 hoisting이 불가능하다
// 대체적으로 hoisting이 불가능 한 것이 정상
// 선언 후 호출이 일반적인 것

/* function example01() {
  console.log("hello");
} */

/* const example01 = function () {
  console.log("hello");
}; */

/* let hi = function () {
  return `안녕하세요..`;
};
console.log(hi()); 
와
let hi = () => `안녕하세요..`;
console.log(hi()); 
는 같다*/

// 화살표함수에서는 매개변수가 존재하지 않는 경우에는 실행문을 보호하는 중괄호와 값을 반환시켜주는 return문을 생략해도 문제없이 작동 가능하다!

/* let sum = function (a, b) {
  return a + b;
};
와
let sum = (a, b) => {
  return a + b;
};
와
let sum = (a, b) => a + b;
는 같다 */

// 화살표 함수한테만 return문과 중괄호 생략 가능

// 화살표 함수 탄생한 이유 (ES6문법)
// 1) 반복적으로 사용되는 function & 함수명을 생략
// 2) JS의 근본없는 구현 & 호출부의 순서를 명확하게 정의하기 위한 목적
// 3) 함수의 실행문에서 중괄호와 return문을 사용하지 않아도 구현할 수 있게끔 해주기 위한 목적

// -------------------------------------
//변수 선언 시 let, const, var 사용하지 않는 방법

/* function greeting() {
  hi = "hello";
}
console.log(greeting());
와
const hi = "hello";
function greeting() {}
console.log(greeting()); 
는 같음*/

// 변수 선언 시 let, const, var 사용하지 않으면 무조건 전역변수화 됨

function greeting() {
  hi = "hello";
}
greeting();
console.log(hi);
//let, const, var 사용하지 않아도 전역변수 쓸 수 있음 함수 호출 후에 해당 요소를 가져다 씀
