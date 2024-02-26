const today = new Date();

// console.log(today.getFullYear());
//date라는 함수를 할당 받은 객체에만 사용 가능 today는 위에서 객체가됨

/* 날짜 정보 가져오는 법 1 */
// const theDay = new Date("2025-02-25");
// console.log(theDay);
// 문자열의 형식으로 가져오면 2월이 나오는데

/* 날짜 정보 가져오는 법 2 */
// const theDay = new Date(2025, 2, 25);
// console.log(theDay);
// 쪼개서 가져오면 3월로 나옴; 1월을 0으로 인식하기 때문에..;;

const theDay = new Date(2025, 2, 25);
console.log(theDay.getMonth());
// 2라고 나옴
// new 라는 예약어를 쓰는이유..
// 프로그래밍 언어!!

// const book1 = {
//   title: "자바스크립트",
//   price: 30000,
//   publishing: "2025-05-05",
// };
// 이거를 몇천개 쓸 수는 없음.. 어차피 공통된 양식을 쓸거니까 class를 만듦

class Book {
  constructor(title, price, publishing) {
    this.title = title;
    this.price = price;
    this.publishing = publishing;
  }
}
// 이런 틀 (프로토타입)을 만듦

const book2 = new Book("자바스크립트", 30000, "2025-05-05");
// 틀을 사용하려면 new라는 예약어를 사용해서 객체를 만들어줘야함
// 반복적이고 유사한 것을 만들려면 new라는 예약어를 써줘야한다

console.log(book2);

const object = new Object();
const array = new Array();
