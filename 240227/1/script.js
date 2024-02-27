//수학객체

let num = 2.1234;
let maxNum = Math.max(10, 5, 8, 30);
console.log(maxNum);

let minNum = Math.min(10, 5, 8, 30);
console.log(minNum);

let roundNum = Math.round(num);
console.log(roundNum);
// 매개변수의 값이 실수 일 때 소수점 첫번째값 반올림

let floorNum = Math.floor(num);
console.log(floorNum);
// 소수점 첫번째 숫자 뭐든지 버림

let ceilNum = Math.ceil(num);
console.log(ceilNum);
// 올림

let rndNum = Math.random();
console.log(rndNum);
// 0 이상 1미만의 실수 값을 랜덤으로 표시
// 값을 랜덤 값으로 주기 때문에 매개 변수 줄 필요 없음 새고할 때마다 값이 계속 바뀜

let piNum = Math.PI;
console.log(piNum);
