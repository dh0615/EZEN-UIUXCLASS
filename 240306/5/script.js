const button = document.querySelector("button");
const result = document.querySelector("#result");

// 로또 규칙..
// 한번 추첨 시 6개의 숫자 (* 반드시 중복되어서는 안됨.. Set()써야함)
// 각각의 6개의 숫자 : 최대 45까지 가능
// 1~45까지의 구간 숫자 랜덤 > 수학객체 random() *45
// 반복문 필요!! *6번
// 절대로 중복되어서는 안됨 > Set()
// add()
// result 공간에 출력
// innerText

// const lottoPlay = () => {
//   console.log("click");
// };
// button.addEventListener("click", lottoPlay);

// // 1 <= random <= 45;
// const randomNum = Math.floor(Math.random() * 45);

// // const numSet = new Set([1, 2, 3, 4, 5, 6]);
// document.write(`${randomNum}`);

/* const lottoPlay = () => {
  const myNumber = new Set();
  for (let i = 0; i < 6; i++) {
    myNumber.add(Math.floor(Math.random() * 45) + 1);
  }
  console.log(myNumber);
};

button.addEventListener("click", lottoPlay); */

// 구조분해할당 활용
const luckyNumber = {
  digitCount: 6,
  maxNumber: 45,
};
const lottoPlay = () => {
  const { digitCount, maxNumber } = luckyNumber;
  const myNumber = new Set();
  for (let i = 0; i < digitCount; i++) {
    myNumber.add(Math.floor(Math.random() * maxNumber) + 1);
  }
  if (myNumber.size !== 6) {
    for (let i = 0; i < digitCount; i++) {
      myNumber.add(Math.floor(Math.random() * maxNumber) + 1);
    }
  } else {
    result.innerText = `${[...myNumber]}`;
  }
};
// set 객체의 값은 그대로 웹브라우저에 출력이 불가하기 때문에 배열로 바꿔줘야하므로 [...myNumber]로 써줘야함
button.addEventListener("click", lottoPlay);
