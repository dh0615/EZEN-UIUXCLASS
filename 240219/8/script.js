// 사용자로부터 숫자를 받으시고 해당 숫자가 양수인지 음수인지 0인지 판단해서 알림창을 활용해서 이에 대한 결과를 출력해주세요

// 반환값이 숫자일 경우에만 함수를 실행시켜주세요

// 1. 사용자에게 숫자를 받음
// 2. 숫자가 아니면 실행하지 않음
// 3. 양수인지 음수인지 0인지 판단
// 4. 알림창으로 결과 출력

// const userNum = prompt("숫자를 입력해주세요!");

// if (userNum !== null) {
//   if (userNum > 0) {
//     alert("양수입니다");
//   } else if (userNum < 0) {
//     alert("음수입니다");
//   } else {
//     alert("0입니다");
//   }
//   alert("숫자로 입력해주세요");
// }

// === 풀이 ===
// 1. 사용자에게 값을 전달받는다
// 2. 사용자에게 전달받은 값이 숫자인 경우를 필터링한다
// 3. 사용자에게 받은 값이 숫자라고 한다면 해당 숫자를 조건식에 따라서 양수인지 음수인지 0인지 출력해줄 수 있는 함수를 정의한다

const number = parseInt(prompt("숫자를 입력하세요"));
/* parseInt : 소수점 x
parseFloat : 소수점까지 남겨놓음 
Number는 boolean같은거도 다 숫자로 인식*/
// console.log(isNaN("hi"));
// isNaN 안에 들어온 값이 문자면 true / 숫자면 false

const isPositive = (n) => {
  if (n > 0) {
    alert(`${n}은 양수입니다.`);
  } else if (n < 0) {
    alert(`${n}은 음수입니다.`);
  } else {
    alert(`"${n}은 0입니다."`);
  }
};
if (!isNaN(number)) {
  /* if함수는 안에 false가 들어오면 실행이 안되기 때문에 !를 앞에 넣어서 true로 만들어서 부정의 부정을 만들어서 실행되게 해줌 */
  isPositive(number);
}
