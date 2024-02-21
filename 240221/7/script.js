// 사용자에게 키와 몸무게값을 받고
// 키에서는 100을 나누고 제곱
// 그 값을 나의 몸무게로 나눔

// const height = document.querySelector("#height");
// const weight = document.querySelector("#weight");
// const calc = document.querySelector("#calc");
// const result = document.querySelector(".result");

// const BMI = () => {
//   if ((height, weight)) {
//     ((height / 100) * (height / 100)) / weight;
//   }
//   return BMI;
// };

// calc.onclick = function (e) {
//   e.preventDefault();
//   result.innerText = BMI(height.value, weight.value);
// };

// -----------------해설..
// 1. Height & Weight 값 정의하기
// 2. button & result 정의하기
// 3. button 이벤트 연산 작업하기
// 3-1. height & weight 값 활용해서 연산작업하고 연산작업한 것을 변수명 안에 할당해줘야함
// 3-2. 함수 & 조건문 연산작업
// 4. result에 출력하기

// const height = document.querySelector("#height");
// const weight = document.querySelector("#weight");
// const form = document.querySelector("form");
// const result = document.querySelector(".result");

// const formHandler = (e) => {
//   e.preventDefault();
//   const heightValue = height.value;
//   const weightValue = weight.value;
//   console.log(heightValue, weightValue);
// };

// form.onsubmit = formHandler; /* 버튼 클릭 시formHandler가 실행되게 해줌 */

const form = document.querySelector("form");
const result = document.querySelector(".result");

const display = (bmi) => {
  let group;
  if (bmi >= 30.0) {
    group = "중등도 비만";
  } else if (bmi >= 25.0) {
    group = "경도 비만";
  } else if (bmi >= 23.0) {
    group = "과체중";
  } else if (bmi >= 18.5) {
    group = "정상";
  } else {
    group = "저체중";
  }
  result.innerText = `${bmi} -> ${group} 입니다.`;
};

const calculate = (weight, height) => {
  return (weight / (height * height)).toFixed(
    1
  ); /* 소수점 첫번째 자리까지만 나오게 하기.. */
};
const formHandler = (e) => {
  e.preventDefault();
  const heightInput = document.querySelector("#height");
  const weightInput = document.querySelector("#weight");

  /* NaN 안나오게하기.. */
  if (weightInput.value !== "" && heightInput.value !== "") {
    const height = heightInput.value / 100;
    const weight = weightInput.value;
    const bmi = calculate(weight, height);

    display(bmi);
    heightInput.value = "";
    weightInput.value = "";
  }
};

form.onsubmit = formHandler;
