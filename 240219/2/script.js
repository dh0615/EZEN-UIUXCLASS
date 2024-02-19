// return문
// const num = Number(prompt("숫자를 몇까지 더할까요?? @.@"));

// function calcSum(n) /* 매개변수 */ {
//   let sum = 0;
//   for (let i = 1; i <= n; i++) {
//     sum += i;
//   }
//   return sum;
//   // 함수가 연산 작업을 한 이후에 연산 작업에 대한 결과를 바깥으로 끄집어내고 싶을 때 return 사용
// }

// calcSum(num); /* 인수 */
// // 매개변수에 들어가는 값과 인수 값이 같지 않아도 된다
// // 인수 = 인자값
// document.write(`1부터 ${num}까지 더하면 ${calcSum(num)} 입니다`);
// // document.write()를 calcSum함수 바깥에 작성하고싶음.. > n이누군지를 모름
// // return문 써줘야 함

// ----------------------------------
// function multiple(a, b, c = 10) {
//   return a + b + c;
// }

// console.log(multiple(1, 2, 3));

//사용자가 어떠한 값을 넣지 않았을 때 기본값으로 구현해주고 싶다면..? >> 기본매개변수
// function multiple(a, b, c = 10) {
//   return a + b + c;
// }
// 기본매개변수
// 사용자가 값을 녛지 않았을 때 지정한 값을 쓰겠다

// ----------------------------------
// function calcSum(n) {
//   let sum = 0;
//   for (let i = 1; i <= n; i++) {
//     sum += i;
//   }
//   console.log(`l부터 ${n}까지 더하면 ${sum}입니다!!`);
// }
// calcSum(5);

// const hi = "hello";
// function greeting() {
//   console.log(hi);
// }
// greeting();

// 스코프 예제 1
// let hi = "hello";

// function change() {
//   hi = "bye";
// }

// console.log(hi);
// change();
// console.log(hi);
// change함수를 주면서 전역변수였던 hi가 지역변수로 바뀌어서 콘솔창에 hello와 bye가 모두 나타남

// 스코프 예제 2
// const factor = 5;
// function calc() {
//   return (
//     num /* return문 안에서만 쓰일 수 있는 block변수인 num */ * factor
//   ); /* factor는 전역변수 */
// }
// const num = 10; /* num을 끄집어내서 전역변수로 선언해줌 */
// let result = calc();
// document.write(`result : ${result}`);

// JS 권장사항
// 1. var보다는 let, const의 키워드로 변수를 선언해라

function addSum(n) {
  var sum = 0;
  for (var i = 1; i <= n; i++) {
    sum += i;
  }
  return sum;
}
var num = 3;
console.log(`1부터 ${num}까지 더하면 ${addSum(num)}`);
// var가 안되는 이유 > 위의 내용을 source탭에서 웹브라우저가 어떻게 읽는지 보면 script안의 전역요소로 읽는게 아니라 윈도우 운영시스템 안인 global에서 읽고 있음을 알 수 있음 >> 비효율 & 협업에 불편함

// 2. 가급적이면, 전역스코프의 변수선언은 피해라

// 3. 그래서 var, let보다는 const에 적응해라..
// 재할당이 필요할 때에만 한정적으로 let을 사용하자..
