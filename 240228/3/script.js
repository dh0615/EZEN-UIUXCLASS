// 원기둥 부피 = 밑면적 * 높이
// 밑 면적 = 파이 * (지름 / 2)의 제곱

// 생성자 함수 혹은 class를 활용해서 코드 작성

// 지름의 길이 받기
// 높이의 길이 받기
// 파이 * (지름 / 2)의 제곱 계산하기
// result에 값 나타내기

// const width = document.querySelector("#cyl-diameter");
// const height = document.querySelector("#cyl-height");

// const vol = {
//   userNum: {
//     userWidth: widt,
//   },
// };

/* 해설 1.. 생성자함수*/
// function Cylinder(cyldiameter, cylheight) {
//   this.diameter = cyldiameter;
//   this.height = cylheight;
//   this.getVolume = function () {
//     let radius = this.diameter / 2;
//     return (Math.PI * radius * radius * this.height).toFixed(2);
//   };
// }

// const cylinder = new Cylinder(8, 10);
// console.log(`원기둥의 부피는 ${cylinder.getVolume()}입니다.`);

/* 해설 2 클래스.. */

const form = document.querySelector("form");
const button = document.querySelector("input[type='submit']");
const result = document.querySelector("#result");
let diameter = document.querySelector("#cyl-diameter");
/* value값은 e 함수 안에 있어야한다 */
let height = document.querySelector("#cyl-height");

class Cylinder {
  constructor(cylinderDiameter, cylinderHeight) {
    this.diameter = cylinderDiameter;
    this.height = cylinderHeight;
  }
  getVolume() {
    let radius = this.diameter / 2;
    return (Math.PI * radius * radius * this.height).toFixed(2);
  }
}
form.addEventListener("submit", (e) => {
  e.preventDefault();

  const diametervalue = diameter.value;
  const heightValue = height.value;

  if (diameterValue === "" || heightValue === "") {
    result.innerText = "지름값과 높이값을 입력하세요";
  } else {
    const cylinder = new Cylinder(parseInt(diameter), parseInt(height));
    result.innerText = `원기둥의 부피는 ${cylinder.getVolume()}입니다`;
  }
});
