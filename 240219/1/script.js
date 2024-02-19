// 함수를 구현하려면 어떻게 해야할까??
// => 함수를 구현하는 방법은 3가지
// 클래스 함수를 구현하는 방법
// 익명 함수를 구현하는 방법
// 화살표 함수를 구현하는 방법 (이게 가장 최신문법 .. )

// ex) 1~5까지 더해보세요~
// 1번방법.. (초급)
// let num = 0;
// num += 1;
// num += 2;
// num += 3;
// num += 4;
// num += 5;

// 2번 방법.. (중급)
// let sum = 0;
// for (let i = 1; i <= 5; i++) {
//   sum += i;
// }
// 한계.. : 만약 숫자를 1~5까지가 아니라 1부터 100까지를 더하라고 한다면  재활용 불가능

// let sum = 0;
// for (let i = 1; i <= 100; i++) {
//   sum += i;
// }
// let sum = 0;
// for (let i = 1; i <= 1000; i++) {
//   sum += i;
// }

// 이렇게 계속 상황에 따라 코드가 계속 나와야 하므로 비효율적 !!

// ------------------------------------
// 3번 방법.. (고급)
// 함수를 구현하는 방법 1. 클래스 함수 구현
// function 함수이름 (매개변수의 공간) {함수의 실행부분}
/* function calcSum() {} */

// 구현한 함수를 호출하는 방법
/* calcSum(); */
// cf) prompt(); , alert();
// 같은 함수는 내장 함수라서 따로 구현해줄 필요가 없었던 것

// function calcSum(n) {
//   let sum = 0;
//   for (let i = 1; i <= n; i++) {
//     sum += i;
//   }
//   console.log(`1부터 ${n}까지 더하면 ${sum} 입니다.`);
// }
// calcSum(10);
// 호출부와 구현부에 모두 값이 들어가거나 들어가지 않아야 정상적으로 실행됨
// calcSum(20); // calcSum이 구현될 때 20이 들어갈 수 있는 여지가 생긴,,

// 고급 레벨 단계 = 중급과 달리 재활용이 가능
// 호출부와 구현부의 calcSum(); 부분에 모두 인수를 넣어줌

/* const userNum01 = Number(prompt("첫번째 숫자를 입력하세요!"));
const userNum02 = Number(prompt("두번째 숫자를 입력하세요!"));

function sum(a, b) {
  const result = a + b;
  alert(`두 수의 합은 ${result} 입니다 !`);
}
sum(userNum01, userNum02); */
// 사용자가 입력한 두 숫자를 매개변수로 받아서 인수값을 활용해서 result에 할당하고 alert를 활용해서 알림창에 띄우겠다..

// 구현부 호출부 매개변수 인수값

// -------------------------------------
// 함수를 구현하는 방법 2. 익명 함수 구현
/* const userNum01 = Number(prompt("첫번째 숫자를 입력하세요!"));
const userNum02 = Number(prompt("두번째 숫자를 입력하세요!"));

const sum = function (a, b) {
  const result = a + b;
  alert(`두 수의 합은 ${result} 입니다 !`);
};
sum(userNum01, userNum02); */
// 함수의 이름을 쓰지 않는 대신 함수를 변수의 값으로 넣어주는 것

// -------------------------------------
// 함수를 구현하는 방법 3. 화살표 함수 구현
/* const userNum01 = Number(prompt("첫번째 숫자를 입력하세요!"));
const userNum02 = Number(prompt("두번째 숫자를 입력하세요!"));

const sum = (a, b) => {
  const result = a + b;
  alert(`두 수의 합은 ${result} 입니다 !`);
};
sum(userNum01, userNum02); */
// 함수의 명, function 모두 안쓰는 것
