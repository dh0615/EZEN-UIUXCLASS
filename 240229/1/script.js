// const Book = function (title, pages, done) {
//   this.title = title;
//   this.pages = pages;
//   this.done = done;
//   // this.finish = function () {
//   //   this.done === false ? (str = "읽는 중") : (str = "완독");
//   //   return str;
//   // };
// };

// Book.prototype.finish = function () {
//   this.done = false ? (str = "읽는 중") : (str = "완독");
//   return str;
// };
// // 부모요소가 상속해준 상속값을 활용해서 매서드함수를 인스턴스 요소로 쓸 수 있게 만들어줌
// console.log(book1.finish());

// const book1 = new Book("자바스크립트", 648, false);
// console.log(book1);

// 생성자 함수 => 프로토타입 => 인스턴스
// Object => Book(prototype) = > book1(__proto__)
// 자식요소 :(__proto__) 부모요소 :(prototype) 부모요소는 Object속성 가져올 수 있다

function Book(title, price) {
  this.title = title;
  this.price = price;
}

Book.prototype.buy = function () {
  console.log(`${this.title}을(를) ${this.price}원에 구매하였습니다`);
};
// 객체를 활용해서 prototype 속성 받고 외부에서 매서드 생성할 수 있게 함
const book1 = new Book("ABCDE", 10000);
book1.buy();

// 위에서 만든 생성자 함수와 비슷하면서 조금 기능이 추가된 생성자 함수를 또 만들고 싶다면?
function Textbook(title, price, major) {
  Book.call(this, title, price);
  this.major = major;
}
Textbook.prototype.buyTextBook = function () {
  console.log(`${this.major}전공 서적, ${this.title}을 구매했습니다`);
};
Object.setPrototypeOf(Textbook.prototype, Book.prototype);
const book2 = new Textbook("타입스크립트", 5000, "컴퓨터 공학");
book2.buyTextBook();
book2.buy();
