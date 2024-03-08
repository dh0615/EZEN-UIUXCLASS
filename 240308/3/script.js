// Javascript 언어 이야기
// 객체 지향 언어

// 외부에서 json 형식의 데이터를 가져와서 웹브라우저 출력해야히는 상황

// JS 언어 => 태생적으로 동기처리방식을 하도록 만들어졌습니다

// XHR => 비동기 !!
// JS => 동기 !!

// 동기 => 순차적으로 무언가를 처리한다는 뜻!!
// 예시 => 커피숍
// 키오스크 탄생 => 비동기 처리

// JS 태생이 동기이지만 특정 상황에 닥쳤을 때 비동기처리를 할 수 있도록 해야하지 않을까??

// JS에서는 비동기 처리방식이 총 3번에 걸쳐서 업그레이드가 되어옴

// 1) 콜백함수
// 2) Promise 객체
// 3) async, await 키워드를 사용하는 방법

// const displayA = () => {
//   console.log("A");
// };
// const displayB = () => {
//   console.log("B");
// };
// const displayC = () => {
//   console.log("C");
// };

// displayA();
// displayB();
// displayC();

// 제아무리 displayB함수의 호출이 displayC함수의 호출보다 먼저 발생했어도, displayC함수의 결과값이 먼저 나오게 할 수 만 있다면, 우리는 자바스크립트언어를 비동기처리가 된 것처럼 만들어낼 수 있는 것이다.

// 호출은 B가 먼저 되었지만 결과값은 나중에 나오게 하는 법..(비동기로 바꾸는 방법 1)
// const displayA = () => {
//   console.log("A");
// };
// const displayB = () => {
//   setTimeout(() => {
//     console.log("B");
//   }, 2000);
// };
// const displayC = () => {
//   console.log("C");
// };
// displayA();
// displayB();
// displayC();

// 비동기로 바꾸는 방법 2
// const displayA = () => {
//   console.log("A");
// };
// const displayB = (callback) => {
//   setTimeout(() => {
//     console.log("B");
//     callback();
//   }, 2000);
// };
// const displayC = () => {
//   console.log("C");
// };
// displayA();
// displayB(displayC);

const display = (result) => {
  console.log(`${result} 준비 완료`);
};

const order = (coffee, callback) => {
  console.log(`${coffee} 주문 접수`);
  setTimeout(() => {
    callback(coffee);
  }, 3000);
};

order("아메리카노", display);
//3초 뒤에 준비완료 뜸

// 콜백지옥 ..
// 콜백을 남용 > 이 문제를 해결하기 위해 Promise객체라는게 나옴
const displayLetter = () => {
  console.log("A");
  setTimeout(() => {
    console.log("B");
    setTimeout(() => {
      console.log("C");
      setTimeout(() => {
        console.log("D");
        setTimeout(() => {
          console.log("STOPPP");
        }, 1000);
      }, 1000);
    }, 1000);
  }, 1000);
};
displayLetter();
