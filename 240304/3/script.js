/* const season = [];
season[0] = "spring";
season[1] = "summer";

console.log(season);

const fruits = new Array("사과", "복숭아", "포도");
fruits[4] = "배";

console.log(fruits);
// ['사과', '복숭아', '포도', empty, '배']라고 나옴

console.log(fruits[3]);
// undefined 라고 나옴 : 아직까지 정의가 되지 않은 값
// null : 유효하지 않은 상태를 의미 NaN..

fruits[0] = "오렌지";
console.log(fruits);
//  ['오렌지', '복숭아', '포도', empty, '배'] 사과가 오렌지로 바뀜..

console.log(fruits.length);
// 5 나옴

// 배열의 전체 아이템 개수 : length
// 배열의 인덱스는 반드시 0부터 시작
// 배열 안의 가장 마지막 아이템의 인덱스 값 => arr.length -1
 */

// code를 작성해서 UI로 구현하고자 하는 거의 대부분의 값들은 복수
// 1개 이상의 이미지 혹은 동영상들

// 배열을 사용하는 정말 중요한 이유 중 하나 !! > 반복문!!

// 일반 for문 / for of문 / forEach문
const colors = ["red", "green", "blue", "white", "black"];
// for (let i = 0; i < colors.length; i++) {
//   console.log(colors[i]);
// } 로 쓰나
// colors.forEach((color) => {
//   console.log(color);
// }); 로 쓰나 같음
// forEach문은 변수의 초기값, 조건문 필요 없다는 장점

// colors.forEach((color, index) => {
//   console.log(`colors[${index}] : ${color}`);
// });

colors.forEach((color, index, array) => {
  console.log(`[${array}][${index}] : ${color}`);
});
