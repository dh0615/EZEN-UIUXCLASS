// 배열에 사용할 수 있는 메서드
// 1. concat() : 두 개 이상의 배열을 추가해서 하나의 배열로 만들고자 할 때 사용

// const vegetable = ["양상추", "토마토", "오이"];
// const meat = ["불고기"];
// const cheese = ["모짜렐라", "슈레드"];

// const meatBurger = vegetable.concat(meat);
// console.log(meatBurger);
// ['양상추', '토마토', '오이', '불고기']
// 0 : "양상추"
// 1 : "토마토"
// 2 : "오이"
// 3 : "불고기"
// length : 4

// const meatBurger = vegetable.concat(meat, "빵");
// const meatBurger = meat.concat(vegetable, "빵");
// console.log(meatBurger);

// const cheeseBurger = [vegetable, cheese];
// console.log(cheeseBurger);
// 하나의 배열 안에 두개의 배열아이템이 들어있는게 아니라 배열 안의 배열로 만들어짐..

// 전개 연산자 구문 써주면 됨
// const cheeseBurger = [...vegetable, ...cheese];
// console.log(cheeseBurger);

// 배열 정렬하기
// const numbers = [6, 9, 3, 21, 18];
// numbers.reverse();
// console.log(numbers);
// reverse() >> [18, 21, 3, 9, 6]로 나옴

// const values = [5, 20, 3, 11, 4, 15];
// 작은 숫자부터 정렬 = sort()
// values.sort();

// 0-9까지의 순번에 따라 찾아옴
// 11은 1로 시작하는걸로 생각해서 11이 3보다 작다고 인식 >> 기준 정의해줘야함
// sort함수는 기본 default값 => 작은 숫자를 좌측 정렬 속성

// 오름차순 정렬 방법
// values.sort((a, b) => {
//   if (a > b) return 1;
//   if (a < b) return -1;
//   if (a === b) return 0;
// }); 를
// values.sort((a, b) => {
//   return a - b;
// }); 로 줄여쓸 수 있음

// 내림차순 정렬 방법
// values.sort((a, b) => {
//   return b - a;
// });
// console.log(values);

// 배열 안에 아이템을 추가 및 삭제하는 메서드
// const animals = ["lion", "bear", "bird"];
// ToDoList 할 때 써봄
// animals.pop();
// pop() 가장 마지막 아이템을 삭제하는 역할
// animals.push("tiger");
// push() 아이템을 추가하는 역할
// console.log(animals);

// const fruits = ["apple", "pear", "banana"];

// fruits.shift();
// console.log(fruits);
//shift() 맨 처음 오는 값을 제거하는 역할
// fruits.unshift("cheery");
// console.log(fruits);
// unshift() 맨 앞에 값을 추가하는 역할

// split(구분자) : 문자열 > 배열
// slice(인덱스) : 문자열 내 특정 인덱스 값부터 문자열

// splice()
// const subjects = ["html", "css", "javascript", "react", "typescript"];
//const subjects01 = subjects.splice(2, 4);
// console.log(subjects01);
// 2번 인덱스부터 4번 인덱스까지

// subjects.splice(2, 4, "vue", "node");
// console.log(subjects);
// 3번째 매개변수부터는 2-4까지 잘라낸 후에 해당 내용을 추가한다는 뜻
//  ['html', 'css', 'vue', 'node']라고 출력됨

// 배열에서의 slice()
// const fruits = ["apple", "pear", "banana", "orange", "pineapple"];
// console.log(fruits.slice(1, 3));
//1번째 인덱스부터 3번째 인덱스 앞까지(=2번째 인덱스까지)를 찾아오라는 뜻

// console.log(fruits);
//splice() , slice()의 공통점
// : 매개변수를 하나만 받았을 경우 해당 매개변수의 인덱스 값부터 끝까지의 값을 추출해온다

// splice() , slice()의 차이점
// splice()는 원본 배열 데이터에도 영향을 미친다.
// slice()의 경우에는 원본데이터에 영향을 미치지 않는다

// -------------------------------
// map() / reduce()
// map() : 원본배열을 그대로 둔 상태에서 특정 연산 작업을 한 결과값을 새로운 배열로 만들고 싶을 때 사용

// const numbers = [1, 2, 3, 4, 5];
// const newNumbers = numbers.map((number) => {
//   return number * 2;
// });
// console.log(newNumbers);
// console.log(numbers);
// forEach와 달리 원본데이터 수정데이터 모두 유지되어 표기됨을 확인

// const newNumbers02 = numbers.map((number, index) => {
//   return index + number * 3;
// }); 를
// const newNumbers02 = numbers.map((number, index) => index + number * 3); 이렇게도 쓸 수 있음
// console.log(newNumbers02);
// 1+2*3 = 7
// 2+3*3 = 11
// 3+4*3 = 15
// 4+5*3 = 19

// 실행문 && 표현식 문
// JS = 다중 패러다임 언어

// const scores = [90, 35, 64, 88, 45, 92];
// const highScores = scores.filter((score) => {
//   return score >= 85;
// });
// console.log(highScores);

// const highScores02 = scores.filter((score, index) => {
//   if (score >= 85) {
//     console.log(`index : ${index}, score : ${score}`);
//   }
//   return score;
// });

// reduce : 누산기 = 누적계산기
// const numbers = [1, 2, 3, 4, 5];
// const result = numbers.reduce((total, current) => {
//   return total + current;
// }, 0);
// console.log(result); // 15출력

// 같은 내용 표현식문으로 쓰기
const numbers = [1, 2, 3, 4, 5];
const result = numbers.reduce((total, current) => total + current, 0);
console.log(result);
