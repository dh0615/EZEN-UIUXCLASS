/* // 객체
// 프로퍼티로 구성되어있음
// 프로퍼티 = 속성
// key : value 이렇게 한쌍으로 구성되어있음
const book1 = {
  title: "자바스크립트",
  pages: 648,
};

//온점표기법
console.log(book1.title);

// 대괄호표기법
console.log(book1["pages"]);

book1.pages = 50;
book1.author = "Jay";
console.log(book1);

new Date();
new Object();
// 완성된 프로토타입을 가지고 인스턴스를 만들어 쓰겠다는 뜻
new Array();

const book2 = new Object();
console.log(typeof book2);
// book2는 new Object의 영향으로 객체,인스턴스가 됨

book2.title = "Typescript";
book2.pages = 500;
book2.author = "Johnny";

delete book2.pages; // 키값없애기

console.log(book2);
 */

// ----------------------------
// 객체 중첩
// for (let i = 0; i < 10; i++) {
//   for (let i = 0; i < 10; i++) {
//   }
// }

// if (true) {
//   if (true) {
//     console.log("true");
//   }
// }
// 조건문과 반복문처럼 객체도 중첩 가능
const student = {
  name: "Jay",
  score: {
    history: 85,
    science: 94,
    average: function () {
      return (this.history + this.science) / 2;
    } /* 문자 숫자 뿐 아니라 함수도 중첩 가능 */,
  },
};

// 메서드 = 함수
console.log(student.score.history);
console.log(student.score.average());
